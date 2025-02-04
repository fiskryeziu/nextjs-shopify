"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Great Experience!",
    starRating: 5,
    comment:
      "Using this product has been an absolute game-changer! The UI is sleek, and the functionality is top-notch.",
    date: "2024-02-02",
  },
  {
    id: 2,
    name: "Michael Smith",
    title: "Highly Recommend",
    starRating: 4,
    comment:
      "The product is fantastic, though I wish there were a few more customization options. Overall, a solid experience!",
    date: "2024-01-28",
  },
  {
    id: 3,
    name: "Sarah Lee",
    title: "Very Satisfied",
    starRating: 5,
    comment:
      "This exceeded my expectations! The performance is smooth, and it integrates well with my workflow.",
    date: "2024-01-15",
  },
  {
    id: 4,
    name: "David Brown",
    title: "Good but Needs Improvement",
    starRating: 3,
    comment:
      "The product is good, but I encountered a few minor bugs. Hoping for future updates to address these issues.",
    date: "2024-01-10",
  },
  {
    id: 5,
    name: "Emma Wilson",
    title: "Fantastic Support",
    starRating: 5,
    comment:
      "Customer support was super helpful! They resolved my issue quickly, and I couldn't be happier.",
    date: "2023-12-30",
  },
  {
    id: 6,
    name: "Chris Adams",
    title: "Worth the Investment",
    starRating: 4,
    comment:
      "Definitely worth the money. A few small areas for improvement, but overall, a great experience.",
    date: "2023-12-20",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <section className="container mx-auto px-4 py-16 bg-secondary">
      <h2 className="mb-8 text-center text-xl md:text-3xl lg:text-4xl font-semibold">
        What People are Saying
      </h2>
      <Carousel setApi={setApi} className="w-full mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="shadow-lg rounded-lg  h-[250px] flex flex-col">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  {/* Star Rating */}
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: testimonial.starRating }).map(
                      (_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ),
                    )}
                  </div>

                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-primary">
                    {testimonial.title}
                  </h3>

                  <p className="text-gray-700 text-sm italic line-clamp-3 overflow-hidden text-ellipsis">
                    {testimonial.comment}
                  </p>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatDate(testimonial.date)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute -bottom-5 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
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
    </section>
  );
}
