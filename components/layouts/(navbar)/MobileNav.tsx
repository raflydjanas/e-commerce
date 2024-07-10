import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ListHome } from "@/constans";
import { FaGithub } from "react-icons/fa6";
import { HiLogin } from "react-icons/hi";
import { RiMenu4Line } from "react-icons/ri";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-slate-50  md:hidden">
        <RiMenu4Line size={28} />
      </SheetTrigger>
      <SheetContent className="text-slate-50 mt-8">
        <ul className="flex flex-col gap-4 border-b border-slate-600 pb-5 pt-6 ">
          {ListHome.map((item, i) => (
            <Link href={item.route} key={i} className="link">
              <p className="text-slate-100 hover:text-purple-500 transition-all duration-200">{item.title}</p>
            </Link>
          ))}
        </ul>

        <div className="flex gap-3 items-center mt-5 ml-2">
          <Link href={"/login"} className="link flex items-center gap-2">
            <p>Login</p>
            <HiLogin size={20} />
          </Link>
          <Link href={"https://github.com"} className="border border-slate-600 hover:border-purple-700 px-5 py-3 rounded-xl">
            <FaGithub />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
