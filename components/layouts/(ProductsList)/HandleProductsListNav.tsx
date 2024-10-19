import { ListProduct } from "@/constans";
import Link from "next/link";
import React from "react";
import { TbCategoryPlus } from "react-icons/tb";

const HandleProductsListNav = () => {
  return (
    <div className="border border-slate-700 max-h-[30rem] w-[15%] text-white p-4 mr-2 flex flex-col gap-3">
      <p className="flex items-center gap-1 pb-3">
        <span>
          <TbCategoryPlus className="text-purple-500" size={25} />
        </span>
        Categories :{" "}
      </p>

      <ul className="hidden md:flex md:flex-col gap-3 text-lg ">
        {ListProduct.map((item, i) => (
          <Link className="border px-5 py-3 rounded-xl" href={item.route} key={i}>
            <p className="text-slate-100 hover:text-purple-500 transition-all duration-200">{item.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HandleProductsListNav;
