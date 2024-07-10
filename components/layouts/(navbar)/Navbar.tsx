import Link from "next/link";
import { ListHome } from "@/constans";
import MobileNav from "./MobileNav";
import { HiLogin } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between md:justify-around px-8 py-4 bg-transparent border-b border-slate-500 ">
      <h2 className="text-3xl text-slate-100">
        Shoop<span className="text-purple-600 font-bold mt-1">PY</span>
      </h2>

      <ul className="hidden md:flex gap-5 items-center text-lg ">
        {ListHome.map((item, i) => (
          <Link href={item.route} key={i}>
            <p className="text-slate-100 hover:text-purple-500 transition-all duration-200">{item.title}</p>
          </Link>
        ))}
      </ul>

      <div className="hidden md:flex gap-2 text-white">
        <Link href={"/login"} className="link flex items-center gap-2">
          <p>Login</p>
          <HiLogin size={20} />
        </Link>
        <Link href={"https://github.com"} className="border border-slate-600 hover:border-purple-700 px-5 py-3 rounded-xl">
          <FaGithub />
        </Link>
      </div>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
