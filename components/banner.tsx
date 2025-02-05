"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { TBanner } from "@/lib/types";

export default function Banner({ data }: { data: TBanner }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full mx-auto">
      <CarouselContent>
        {data.images.map((image, idx) => (
          <CarouselItem key={image.id}>
            <Card>
              <CardContent className="flex relative aspect-[16/9]  p-0">
                <div className="z-10 w-full h-ful flex flex-col justify-center items-start gap-5 ml-10">
                  <p className="text-xs md:text-base lg:text-xl">
                    Sale! up to 50% off!
                  </p>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl w-[15ch] sm:w-[20ch] md:w-[15ch] capitalize font-medium">
                    {data.titles[idx]}
                  </h1>
                  <Button className="px-3 py-1 text-sm md:px-4 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg">
                    Shop now
                  </Button>{" "}
                </div>{" "}
                <Image
                  src={image.url}
                  alt={"dummy text"}
                  width={1600}
                  height={900}
                  className="object-cover w-full h-full absolute"
                />
                <div className="absolute inset-0 flex  pointer-events-none">
                  <div className="w-2/4 bg-gradient-to-r from-white via-white to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              className={`flex justify-center items-center w-3 h-3 rounded-full transition-colors ${index === current ? "scale-150 border border-black" : "border border-black"}`}
              onClick={() => api?.scrollTo(index)}
            >
              <div
                className={`w-1.5 h-1.5  rounded-full transition-colors ${
                  index === current ? "bg-black" : "bg-transparent"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </Carousel>
  );
}
