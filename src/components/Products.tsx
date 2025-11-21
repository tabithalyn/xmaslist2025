"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/productData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = () => {
  const [sortOrder, setSortOrder] = useState("none");
  const [storeFilter, setStoreFilter] = useState("All");

  const storeOptions = ["All", ...new Set(PRODUCTS.map((p) => p.store))];

  const filteredAndSortedProducts = PRODUCTS
    .filter((product) => storeFilter === "All" ? true : product.store === storeFilter)
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-stone-950">
      <header className="bg-white dark:bg-stone-950/10 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 gap-2 flex justify-center items-center">
          <Select
            value={storeFilter}
            onValueChange={(value) => setStoreFilter(value)}
          >
            <SelectTrigger className="w-[180px] dark:text-stone-400">
              <SelectValue placeholder="Filter by Store" />
            </SelectTrigger>
            <SelectContent className="dark:text-stone-400">
              {storeOptions.map((store) =>
                store === "All" ? (
                  <SelectItem key={store} value={store}>
                    Filter by Store - All
                  </SelectItem>
                ) : (
                  <SelectItem key={store} value={store}>
                    {store}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <Select
            value={sortOrder}
            onValueChange={(value) => setSortOrder(value)}
          >
            <SelectTrigger className="w-[180px] dark:text-stone-400">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="dark:text-stone-400">
              <SelectItem value="none">Sort by</SelectItem>
              <SelectItem value="lowToHigh">
                Price: Low → High
              </SelectItem>
              <SelectItem value="highToLow">
                Price: High → Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-6 flex flex-wrap justify-center items-center">
                <div className="flex justify-center items-center h-80 bg-gray-100 dark:bg-gray-900 rounded-md mb-4 relative overflow-hidden w-full">
                  <Image
                    src={product.src}
                    alt={product.title}
                    className="object-cover dark:opacity-80"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 w-full text-center h-16 dark:text-stone-200/80">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-xl font-medium dark:text-stone-400">${product.price.toFixed(2)}</p>
                <div className="flex items-center mb-4 w-full">
                  <span className="text-sm text-gray-600 w-full text-center dark:text-stone-400">
                    Size/Colour: <b>{product.size}</b>
                  </span>
                </div>
                <p className="text-gray-500 font-italic text-sm dark:text-stone-500">
                  {product.notes}
                </p>
                <CardFooter className="p-2 flex justify-between items-center">
                  <Link href={product.link} target="_blank">
                    <Button variant="default" className="w-full dark:bg-stone-300 hover:cursor-pointer">
                      <span className="w-full flex flex-wrap justify-center items-center dark:text-stone-800 dark:outline-stone-900">
                        View Product
                        <SquareArrowOutUpRight width={20} height={20} className="ml-2" />
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
 
export default Products;