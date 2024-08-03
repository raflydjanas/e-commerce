import { TabsInvormations } from "./TabsInvormations";

const MainHome = () => {
  return (
    <section className="text-white flex flex-1 flex-col items-center justify-center mt-20 ">
      <h1 className="text-xl mb-4 lg:text-2xl text-center font-semibold">Explore the solutions</h1>
      <p className="text-center text-slate-300 mx-3 xl:mx-0 text-sm md:text-base xl:text-lg max-w-2xl">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
      </p>
      <TabsInvormations />
    </section>
  );
};

export default MainHome;
