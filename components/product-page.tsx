"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Share2, ArrowRight, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Benefits from "./benefits";
import BreadcrumbNav from "./breadcrumb-nav";

const colors = [
  { value: "yellow", hex: "#FFD34F" },
  { value: "green", hex: "#096F00" },
  { value: "blue", hex: "#001182" },
  { value: "pink", hex: "#FF7373" },
  { value: "white", hex: "#FFFFFF", border: "border border-black" },
];
const sizes = [
  { value: "S", disabled: false },
  { value: "M", disabled: false },
  { value: "L", disabled: false },
  { value: "XL", disabled: false },
  { value: "XXL", disabled: true },
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <section className="container mx-auto px-5">
      <BreadcrumbNav />
      <div className="grid lg:grid-cols-2 gap-8 pb-10">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/assets/product1.webp"
                alt="T-shirt front view"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/assets/product2.webp"
                alt="T-shirt logo detail"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="aspect-video relative overflow-hidden">
            <Image
              src="/assets/product3.webp"
              alt="T-shirt logo close-up"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/assets/product4.webp"
                alt="T-shirt back view"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="/assets/product5.webp"
                alt="T-shirt worn by model"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              Ribbed Short-Sleeved T-Shirt
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 fill-current ${i < 4 ? "text-yellow-400" : "text-gray-400"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                (1.2k reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-semibold">$68.00</div>

          <div>
            <p className="text-sm text-muted-foreground">
              The premium Unlined in Committed are products that have been
              produced using sustainable fibers or processes, reducing their
              environmental impact.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Colors: {selectedColor}</Label>
              <RadioGroup
                defaultValue={selectedColor}
                onValueChange={setSelectedColor}
                className="flex gap-2 mt-2"
              >
                {colors.map(({ value, hex, border }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value}
                      id={value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={value}
                      className="flex  items-center rounded-xl border-2 border-transparent peer-data-[state=checked]:border-primary"
                    >
                      <span
                        className={`w-12 h-12 rounded-xl opacity-30 ${border || ""}`}
                        style={{ backgroundColor: hex }}
                      ></span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Size: {selectedSize}</Label>
              <RadioGroup
                defaultValue={selectedSize}
                onValueChange={setSelectedSize}
                className="flex gap-2 mt-2"
              >
                {sizes.map(({ value, disabled }) => (
                  <div key={value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={value}
                      id={value}
                      className="peer sr-only"
                      disabled={disabled}
                    />
                    <Label
                      htmlFor={value}
                      className="flex justify-center items-center rounded-full border-1 border-primary/40 peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-secondary peer-hover:border-black peer-checked:text-white w-12 h-12"
                    >
                      <span className={`${disabled ? "relative" : ""}`}>
                        {disabled && (
                          <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                            <span className="absolute border-t-2 border-dashed border-primary/40 w-12 rotate-45"></span>
                            <span className="absolute border-t-2 border-dashed border-primary/40 w-12 -rotate-45"></span>
                          </span>
                        )}
                        {value}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button className="w-full bg-black text-white hover:bg-black/90">
              PURCHASE OR UNAVAILABLE
            </Button>

            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Product
              </Button>
              <Button variant="ghost" size="sm">
                Compare
              </Button>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t">
            <h3 className="font-semibold">Get It Today</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Truck className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-muted-foreground">
                    Free shipping on orders over $75
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">100+ Day Returns</p>
                  <p className="text-muted-foreground">
                    Returns from $7.95 AM to 10:00 PM everyday
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">100% Free Returns</p>
                  <p className="text-muted-foreground">
                    If it doesn't fit or match, You have 30 days to treat our
                    hearts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold text-lg">Description</p>
              <p className="text-muted-foreground">
                Keep your ho me organized, yet elegant with storage cabinets by
                Onita Patio Furniture. These cabinets not only make a great
                storage units, but also bring a great decorative accent to your
                decor. Traditionally designed, they are perfect to be used in
                the hallway, living room, bedroom, office or any place where you
                need to store or display things. Made of high quality materials,
                they are sturdy and durable for years. Bring one-of-a-kind look
                to your interior with furniture from Onita Furniture!
              </p>
            </div>
            <div>
              <p className="font-semibold text-lg">About this product</p>
              <ol className="list-disc ml-8 text-muted-foreground">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
    </section>
  );
}
