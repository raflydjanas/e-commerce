"use client";

import { Tabs } from "@/components/ui/aceternity/Tabs";
import ServicesTabs from "./ServicesTabs";
import CategoriesProductTabs from "./CategoriesTabs";

export function TabsInvormations() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: <CategoriesProductTabs />,
    },
    {
      title: "Services",
      value: "services",
      content: <ServicesTabs />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
