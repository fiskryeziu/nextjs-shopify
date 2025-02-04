"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const categories = [
  { name: "Beauty", image: "/assets/categories/beauty.webp" },
  { name: "Clothes", image: "/assets/categories/clothes.webp" },
  { name: "Sets", image: "/assets/categories/sets.webp" },
  { name: "Accessories", image: "/assets/categories/accessories.webp" },
  { name: "Makeup", image: "/assets/categories/makeup.webp" },
  { name: "Fragrance", image: "/assets/categories/fragrance.webp" },
];

export default function Categories() {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-xl md:text-3xl lg:text-4xl font-semibold">
        Categories
      </h2>
      <Carousel setApi={setApi} className="w-full mx-auto">
        <CarouselContent>
          {categories.map((category, idx) => (
            <CarouselItem key={idx} className="basis-1/2 md:basis-1/4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[2/3] bg-gray-200">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover hover:scale-125 duration-300 transition-transform"
                    />
                    <Button className="absolute bottom-4 left-1/2 bg-white text-black hover:text-white transform -translate-x-1/2 w-28 z-10">
                      {category.name}
                    </Button>
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10 w-10 h-10" />
        <CarouselNext className="right-10 w-10 h-10" />
      </Carousel>
    </section>
  );
}
