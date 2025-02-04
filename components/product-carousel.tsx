"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProductCard from "./product-card";
import { Product } from "@/lib/types";

export default function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <section className="w-full mb-8 px-10">
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product, idx) => (
            <CarouselItem key={idx} className="basis-1/2 md:basis-1/4">
              <ProductCard item={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-5 w-10 h-10 disabled:pointer-events-auto" />
        <CarouselNext className="-right-5 w-10 h-10" />
      </Carousel>
    </section>
  );
}
