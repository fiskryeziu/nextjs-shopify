"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import ProductCard from "./product-card";
import { Product } from "@/lib/types";

export default function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-xl md:text-3xl lg:text-4xl font-semibold">
        Related Products
      </h2>
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product, idx) => (
            <CarouselItem
              key={idx}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4"
            >
              <ProductCard item={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
