import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function BrandImages() {
  const images = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    url: `/assets/brand/${index + 1}.png`,
  }));

  return (
    <section className="container mx-auto my-20">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/6"
              key={image.id}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={image.url}
                  alt={`Brand Logo ${image.id}`}
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
