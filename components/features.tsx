import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  return (
    <div className="w-full py-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/#">
          <Card className="overflow-hidden rounded-none">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/feature/feature.webp"
                  alt="feature"
                  width={1600}
                  height={900}
                  className="object-cover w-full h-full absolute"
                />

                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      Best Sellers
                    </h2>
                    <p className="text-white/90 border-b-2 pb-2 text-xs md:text-base">
                      SHOP NOW
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/#">
          <Card className="overflow-hidden rounded-none">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/feature/feature2.webp"
                  alt="feature"
                  width={1600}
                  height={900}
                  className="object-cover w-full h-full absolute"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      New Arrivals
                    </h2>
                    <p className="text-white/90 text-xs md:text-base border-b-2 pb-2">
                      SHOP NOW
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
