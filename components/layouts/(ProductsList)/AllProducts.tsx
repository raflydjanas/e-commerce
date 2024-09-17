import Image from "next/image";
import React from "react";

const AllProducts = ({ product }: { product: any }) => {
  return (
    <div key={product.id} className="border border-slate-700 flex flex-col items-center justify-center gap-2 p-4">
      <Image src={product.images[1]} alt={product.title} width={200} height={200} className="w-full object-cover object-center" />
      <div className="">
        <p className="text-lg">{product.title.slice(0, 20)}...</p>
        <p>{product.description.slice(0, 30)}...</p>
        <p className="font-bold text-xl">${product.price}</p>
      </div>
    </div>
  );
};

export default AllProducts;
