"use client";
import Hero from "@/components/layouts/(home)/Hero";
import MainHome from "@/components/layouts/(home)/MainHome";

export default function Home() {
  return (
    <main className="relative h-screen w-full ">
      <Hero />
      <span className="absolute left-0 right-0 top-[25rem] md:top-[23rem] xl:top-[27.7rem] m-auto w-px h-20 p-px bg-slate-100"></span>
      <MainHome />
    </main>
  );
}
