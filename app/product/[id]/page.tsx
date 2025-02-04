import ProductPage from "@/components/product-page";
import RelatedProducts from "@/components/related-products";
import { getRelatedProducts } from "@/lib/actions/shopify";
import { Suspense } from "react";

export default async function Page() {
  const products = await getRelatedProducts();
  return (
    <>
      <ProductPage />
      <Suspense fallback={null}>
        <RelatedProducts products={products} />
      </Suspense>
    </>
  );
}
