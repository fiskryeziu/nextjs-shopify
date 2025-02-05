"use server";

import { Categories } from "@/components/products";
import { ShopifyMenuOperation } from "../types";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { TAGS } from "../constants";
import { revalidateTag } from "next/cache";
const domain = process.env.SHOPIFY_DOMAIN as string;

export async function shopifyFetch<T>({
  query,
  cache = "force-cache",
  tags,
}: {
  query: string;
  cache?: RequestCache;

  tags?: string[];
}): Promise<{ status: number; body: T } | { status: number; error: string }> {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN as string;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: JSON.stringify({ query }),
      cache,
      ...(tags && { next: { tags } }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("error", error);
    return {
      status: 500,
      error: "error receiving data",
    };
  }
}

export async function getAllProducts() {
  return shopifyFetch({
    query:
      /* GraphQL */
      `
        {
          products(sortKey: TITLE, first: 100) {
            edges {
              node {
                id
                title
                description
              }
            }
          }
        }
      `,
    tags: [TAGS.products],
  });
}

export async function getMenu() {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query:
      /* GraphQL */
      `
        {
          menu(handle: "main-menu") {
            items {
              title
              id
              url
            }
          }
        }
      `,
  });

  return (
    res.body?.data?.menu?.items.map(
      (item: { title: string; id: string; url: string }) => ({
        id: item.id,
        title: item.title,
        url: item.url.replace(domain, ""),
      }),
    ) || []
  );
}

export async function getBannerInfo() {
  const res = await shopifyFetch({
    query:
      /* GraphQL */
      `
        {
          metaobject(handle: { handle: "banner-nmvpww9w", type: "banner" }) {
            id
            fields {
              key
              value
              references(first: 10) {
                nodes {
                  ... on MediaImage {
                    image {
                      id
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
  });

  const images = res.body?.data?.metaobject?.fields[0].references?.nodes.map(
    ({ image }: { image: { id: string; url: string } }) => ({
      id: image.id,
      url: image.url,
    }),
  );

  const title = res.body?.data?.metaobject?.fields[1].value;
  return {
    images,
    titles: JSON.parse(title),
  };
}
export async function getProducts(): Promise<Categories> {
  const res = await shopifyFetch({
    query:
      /* GraphQL */
      `
        {
          bestSellers: collectionByHandle(handle: "best-sellers") {
            title
            products(first: 10) {
              edges {
                node {
                  title
                  variants(first: 1) {
                    edges {
                      node {
                        compareAtPrice {
                          amount
                        }
                        price {
                          amount
                        }
                      }
                    }
                  }
                  featuredImage {
                    url
                  }
                }
              }
            }
          }
          onSale: collectionByHandle(handle: "on-sale") {
            title
            products(first: 10) {
              edges {
                node {
                  title
                  variants(first: 1) {
                    edges {
                      node {
                        compareAtPrice {
                          amount
                        }
                        price {
                          amount
                        }
                      }
                    }
                  }
                  featuredImage {
                    url
                  }
                }
              }
            }
          }
          newArrivals: collectionByHandle(handle: "new-arrivals") {
            title
            products(first: 10) {
              edges {
                node {
                  title
                  variants(first: 1) {
                    edges {
                      node {
                        compareAtPrice {
                          amount
                        }
                        price {
                          amount
                        }
                      }
                    }
                  }
                  featuredImage {
                    url
                  }
                }
              }
            }
          }
        }
      `,
    tags: [TAGS.collections, TAGS.products],
  });

  const transformProducts = (data) => {
    const collections = ["bestSellers", "onSale", "newArrivals"];

    const result = {};

    collections.forEach((collectionKey) => {
      const collection = data[collectionKey];
      const collectionName = collection.title;

      const productsOnSale = collection.products.edges
        .map(({ node }) => {
          const variant = node.variants.edges[0]?.node;
          const isOnSale = variant?.compareAtPrice ? true : false;

          return {
            name: node.title,
            url: node.featuredImage?.url || "/assets/categories/default.jpg",
            price: variant.price,
            compareAtPrice: variant.compareAtPrice,
            isOnSale,
          };
        })
        .filter(Boolean);

      result[collectionName] = [...productsOnSale];
    });

    return result;
  };

  return transformProducts(res?.body?.data);
}

export async function getRelatedProducts() {
  const res = await shopifyFetch({
    query:
      /* GraphQL */
      `
        {
          products(sortKey: RELEVANCE, first: 6) {
            edges {
              node {
                id
                title
                featuredImage {
                  url
                }
                variants(first: 1) {
                  edges {
                    node {
                      price {
                        amount
                      }
                      compareAtPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    tags: [TAGS.products, TAGS.products],
  });

  const transformProducts = res.body?.data?.products?.edges.map((product) => {
    const productNode = product.node;
    const price = productNode.variants?.edges[0]?.node?.price;
    const compareAtPrice =
      productNode?.variants?.edges[0]?.node?.compareAtPrice;

    const isOnSale = compareAtPrice ? true : false;

    return {
      name: productNode.title,
      url: productNode.featuredImage.url,
      price,
      compareAtPrice,
      isOnSale,
    };
  });

  return transformProducts;
}

export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = [
    "collections/create",
    "collections/delete",
    "collections/update",
  ];
  const productWebhooks = [
    "products/create",
    "products/delete",
    "products/update",
  ];
  const topic = (await headers()).get("x-shopify-topic") || "unknown";
  const secret = req.nextUrl.searchParams.get("secret");
  const isCollectionUpdate = collectionWebhooks.includes(topic);
  const isProductUpdate = productWebhooks.includes(topic);

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error("Invalid revalidation secret.");
    return NextResponse.json({ status: 401 });
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
