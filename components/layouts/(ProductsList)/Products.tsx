import { getAllProducts } from "@/app/api/product";
import Search from "@/components/ui/Search";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import HandleProductsListNav from "./HandleProductsListNav";

const Products = () => {
  const [products, setProducts] = useState<[]>([]);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="w-full h-full ">
      <Search />
      <div className="flex gap-3">
        <div className="text-white flex flex-wrap items-center justify-center gap-3 w-[85%]">
          {products.map((product: any) => {
            return <AllProducts product={product} key={product.id} />;
          })}
        </div>
        <HandleProductsListNav />
      </div>
    </section>
  );
};

export default Products;
