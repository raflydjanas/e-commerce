import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-gradient-to-t from-black to-slate-800 xl:pb-36 pb-16">
      <div className="flex flex-col mx-auto max-w-full items-center mt-36">
        <h1 className="z-20 text-4xl md:text-5xl xl:text-6xl font-semibold text-center mb-4 font-urbanist text-white">
          Make your Outfit <span className=" bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-950">wonderful</span>
        </h1>
        <p className="text-center text-slate-100 mx-3 xl:mx-0 text-sm md:text-base xl:text-lg max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias a nesciunt et eum aperiam molestiae doloremque labore maiores quae!
        </p>

        <div className="z-20 mt-5 w-[20rem] flex items-center justify-center">
          <Link href="/products" className="link bg-violet-700 hover:bg-violet-900 text-white w-full text-center text-xl">
            Shopping now
          </Link>
        </div>

        <Image src="../images/circle-1.svg" alt="circle" width={400} height={400} className="hidden sm:block md:hidden lg:block absolute 2xl:right-56 xl:-top-10 lg:right-0" />
        <Image src="../images/blob.svg" alt="circle" width={400} height={400} className="hidden sm:block md:hidden lg:block absolute lg:left-28 2xl:left-72 xl:-bottom-24" />
      </div>
    </section>
  );
};

export default Hero;
