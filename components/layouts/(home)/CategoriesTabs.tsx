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
  console.log("🚀 ~ CategoriesProductTabs ~ category:", category);

  const categories = async () => {
    const dataCategories: CategoriesProductTabsProps[] = await getAllCategoriesProducts();
    setCategory(dataCategories);
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 to-violet-950 ">
      <h3 className="text-3xl mb-4">Product Tabs</h3>
      <div className="flex flex-col justify-between items-center h-full w-full">
        <p className="text-center hidden md:block text-slate-300 mx-3 text-base max-w-xl">
          Enjoy the best online shopping experience with a wide range of products, exciting offers, fast delivery, secure payment methods, and 24/7 customer service. Join our loyalty program and
          experience the convenience of shopping at a trusted e-commerce platform!
        </p>

        <div className="flex flex-row gap-5">
          {category.map((item: CategoriesProductTabsProps) => (
            <div key={item.id} className="flex flex-col items-center bg-black p-4 rounded-lg">
              <div className="bg-red-600 flex justify-center items-center p-2 rounded-md">
                <Image src={item.image} alt={item.name} width={100} height={100} />
              </div>
              <p className="text-white mt-2 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesProductTabs;
