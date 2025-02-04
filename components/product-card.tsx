import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";
import { Price, Product } from "@/lib/types";

export default function ProductCard({ item }: { item: Product }) {
  const percentage = (price: Price, compareAtPrice: Price | null): number => {
    if (compareAtPrice === null) return 0;
    const priceAmount = parseFloat(price.amount);
    const compareAtPriceAmount = parseFloat(compareAtPrice.amount);

    const difference = compareAtPriceAmount - priceAmount;
    const percentageDifference = (difference / compareAtPriceAmount) * 100;

    return Math.round(percentageDifference);
  };
  return (
    <Link href={"/product/1"}>
      <Card
        key={item.name}
        className="overflow-hidden bg-transparent border-none"
      >
        <CardContent className="p-0">
          <div className="relative aspect-[2/3] bg-gray-200">
            <Image
              src={item.url || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="z-10 bg-white absolute top-2 right-2 rounded-full p-1.5">
              <Heart className="" />
            </div>
            {item.isOnSale && (
              <div className="z-10 bg-[#DB4444] absolute top-2 left-2 rounded-full py-0.5 px-2.5 text-background uppercase">
                Sale
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="text-left py-2 pl-1">
          <div>
            <p className="text-base text-primary">{item.name}</p>
            <div className="flex gap-2">
              <p>{item.price?.amount}$</p>
              {item.isOnSale && (
                <>
                  <p className="line-through text-secondary-foreground">
                    {item.compareAtPrice?.amount}
                  </p>
                  <span className="bg-[#D2EF9A] py-0.5 px-2.5 rounded-full">
                    {percentage(item.price, item.compareAtPrice)}%
                  </span>
                </>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
