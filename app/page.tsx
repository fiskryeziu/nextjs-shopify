import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Categories from "@/components/categories";
import Banner from "@/components/banner";
import Products from "@/components/products";
import RelatedProducts from "@/components/related-products";
import Testimonials from "@/components/testimonials";
import Social from "@/components/social";
import Brand from "@/components/brand";
import {
  getBannerInfo,
  getProducts,
  getRelatedProducts,
} from "@/lib/actions/shopify";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// TODO: fix the styling prolems with, benefit comp product card..
export default async function Home() {
  const bannerInfoPromise = getBannerInfo();
  const productsPromise = getProducts();
  const relatedProductsPromise = getRelatedProducts();

  const [bannerInfo, products, relatedProducts] = await Promise.all([
    bannerInfoPromise,
    productsPromise,
    relatedProductsPromise,
  ]);

  return (
    <main>
      <Suspense fallback={null}>
        <Banner data={bannerInfo} />
      </Suspense>
      <Features />
      <Benefits />
      <Categories />
      {/* NOTE: suspense null for now */}
      <Products products={products} />
      {/* NOTE: suspense null for now */}
      <RelatedProducts products={relatedProducts} />
      <Testimonials />
      <Social />
      <Brand />
    </main>
  );
}
