import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { InstagramIcon } from "lucide-react";

const socials = [
  { id: "1", image: "/assets/categories/fragrance.webp" },
  { id: "2", image: "/assets/categories/fragrance.webp" },
  { id: "3", image: "/assets/categories/fragrance.webp" },
  { id: "4", image: "/assets/categories/fragrance.webp" },
  { id: "5", image: "/assets/categories/fragrance.webp" },
];
export default function Social() {
  return (
    <div className="container mx-auto my-10">
      <div className="space-y-4 my-10">
        <h2 className="mb-8 text-center text-xl md:text-3xl lg:text-4xl font-semibold">
          Anvogue On Instagram
        </h2>
        <p className="text-center">#anvogue theme</p>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {socials.map((social) => (
            <CarouselItem
              key={social.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
            >
              <div
                className="relative aspect-square rounded-4xl overflow-hidden group"
                tabIndex={0}
              >
                <Image
                  src={social.image || "/placeholder.svg"}
                  alt={social.id}
                  width={245}
                  height={245}
                  className="object-cover rounded-4xl h-full w-full transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <InstagramIcon size={40} color="white" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
