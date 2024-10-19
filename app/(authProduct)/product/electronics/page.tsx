"use client";

import { getAllProducts } from "@/app/api/product";
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const ElectronicsPage = () => {
  const [products, setProducts] = useState<[]>([]);

  const getProducts = async () => {
    const data = await getAllProducts();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="h-full w-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {!products.length && (
          <div className="flex items-center justify-center w-[95%]">
            <BallTriangle height={200} width={200} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
          </div>
        )}

        <div className="text-white flex flex-wrap items-center justify-center gap-3 w-full">
          {products.map((product: any) => {
            return (
              <>
                <p>{product.category.name}</p>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElectronicsPage;
