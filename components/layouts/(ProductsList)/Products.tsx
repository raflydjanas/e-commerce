"use client";

import { getAllProducts } from "@/app/api/product";
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import { BallTriangle } from "react-loader-spinner";

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
    <section className="flex flex-col items-center justify-center w-full h-full">
      {!products.length && (
        <div className="flex items-center justify-center w-[95%]">
          <BallTriangle height={200} width={200} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
      )}

      <div className="text-white flex flex-wrap items-center justify-center gap-3 w-full">
        {products.map((product: any) => {
          return <AllProducts product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default Products;
