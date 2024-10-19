"use client";

import HandleProductsListNav from "@/components/layouts/(ProductsList)/HandleProductsListNav";
import Search from "@/components/ui/Search";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-10 ">
      <Search />
      <div className="flex gap-3 ">
        {children}
        <HandleProductsListNav />
      </div>
    </div>
  );
};

export default layout;
