"use client";

import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/product";
import Image from "next/image";

const ProductPage = () => {
  const [products, setProducts] = useState<any>([]);
  console.log("🚀 ~ ProductPage ~ products:", products);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="w-full h-full mt-20">
      <div className="text-white flex flex-wrap items-center justify-center gap-3">
        {products.map((product: any) => (
          <div key={product.id} className="border border-slate-700 flex flex-col items-center justify-center">
            <Image src={product.images[1]} alt={product.title} width={200} height={200} className="w-full object-cover object-center" />
            <div className="">
              <p className="text-lg">{product.title.slice(0, 20)}...</p>
              <p className="font-bold text-xl">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
