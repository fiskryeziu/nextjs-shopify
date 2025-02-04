import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCarousel from "./product-carousel";
import { Product } from "@/lib/types";

export type Categories = {
  "best-sellers": Product[];
  "on-sale": Product[];
  "new-arrivals": Product[];
};
export default function Products({ products }: { products: Categories }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <Tabs defaultValue="bestSellers" className="w-full">
        <TabsList className="grid w-72 grid-cols-3 mb-8 mx-auto rounded-xl bg-secondar">
          <TabsTrigger value="best-sellers" className="rounded-xl">
            Best Sellers
          </TabsTrigger>
          <TabsTrigger value="on-sale" className="rounded-xl">
            On Sale
          </TabsTrigger>
          <TabsTrigger value="new-arrivals" className="rounded-xl">
            New Arrivals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="best-sellers">
          <ProductCarousel products={products["best-sellers"]} />
        </TabsContent>

        <TabsContent value="on-sale">
          <ProductCarousel products={products["on-sale"]} />
        </TabsContent>

        <TabsContent value="new-arrivals">
          <ProductCarousel products={products["new-arrivals"]} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
