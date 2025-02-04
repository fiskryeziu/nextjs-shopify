import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCarousel from "./product-carousel";
import { Product } from "@/lib/types";

export default function Products({ products }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <Tabs defaultValue="bestSellers" className="w-full">
        <TabsList className="grid w-72 grid-cols-3 mb-8 mx-auto rounded-xl bg-secondar">
          <TabsTrigger value="bestSellers" className="rounded-xl">
            Best Sellers
          </TabsTrigger>
          <TabsTrigger value="onSale" className="rounded-xl">
            On Sale
          </TabsTrigger>
          <TabsTrigger value="newArrivals" className="rounded-xl">
            New Arrivals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bestSellers">
          <ProductCarousel products={products["best-sellers"]} />
        </TabsContent>

        <TabsContent value="onSale">
          <ProductCarousel products={products["on-sale"]} />
        </TabsContent>

        <TabsContent value="newArrivals">
          <ProductCarousel products={products["new-arrivals"]} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
