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

export default async function Home() {
  const data = await getBannerInfo();
  const products = await getProducts();
  const relatedProducts = await getRelatedProducts();
  return (
    <main>
      <Suspense fallback={null}>
        <Banner data={data} />
      </Suspense>
      <Features />
      <Benefits />
      <Categories />
      {/* NOTE: suspense null for now */}
      <Suspense fallback={null}>
        <Products products={products} />
      </Suspense>
      {/* NOTE: suspense null for now */}
      <Suspense fallback={null}>
        <RelatedProducts products={relatedProducts} />
      </Suspense>
      <Testimonials />
      <Social />
      <Brand />
    </main>
  );
}
