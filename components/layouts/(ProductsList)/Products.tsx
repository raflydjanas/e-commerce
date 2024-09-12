import { getAllProducts } from "@/app/api/product";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState<any>([]);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="">
      <Input className="bg-slate-800 border-slate-500 text-white text-lg" />
      <div className="flex">
        <div className="text-white flex flex-wrap items-center justify-center gap-3">
          {products.map((product: any) => (
            <div key={product.id} className="border border-slate-700 flex flex-col items-center justify-center">
              <Image src={product.images[1]} alt={product.title} width={200} height={200} className="w-full object-cover object-center" />
              <div className="">
                <p className="text-lg">{product.title.slice(0, 20)}...</p>
                <p>{product.description.slice(0, 30)}...</p>
                <p className="font-bold text-xl">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-slate-700 w-full max-h-[30rem] text-white">
          <p>This is Product Page</p>
          <p>This is Product Page</p>
          <p>This is Product Page</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
