import { getAllCategoriesProducts } from "@/app/api/product";
import Image from "next/image";
import { useEffect, useState } from "react";

type CategoriesProductTabsProps = {
  id: number;
  name: string;
  image: string;
};

const CategoriesProductTabs = () => {
  const [category, setCategory] = useState<CategoriesProductTabsProps[]>([]);

  const categories: () => Promise<void> = async () => {
    const dataCategories: CategoriesProductTabsProps[] = await getAllCategoriesProducts();
    setCategory(dataCategories);
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 to-violet-950 ">
      <div className="flex flex-col justify-between items-center  w-full">
        <p className="text-center hidden md:block text-slate-300 mx-3 text-base max-w-xl my-5">
          Enjoy the best online shopping experience with a wide range of products, exciting offers, fast delivery, secure payment methods, and 24/7 customer service. Join our loyalty program and
          experience the convenience of shopping at a trusted e-commerce platform!
        </p>

        <div className="relative flex flex-row gap-5">
          {category.map((item: CategoriesProductTabsProps) => (
            <div key={item.id} className="mt-10 w-[12rem] h-[12rem] rounded-lg cursor-pointer">
              <Image src={item.image || ""} alt={item.name} width={100} height={100} className="rounded-md w-full h-full object-cover" />
              <div className="absolute top-10 opacity-0 hover:opacity-100 bg-black/50 hover:transition-all hover:duration-400 w-[12rem] h-[12rem] rounded-lg">
                <p className="text-center mt-2 text-sm ">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesProductTabs;
