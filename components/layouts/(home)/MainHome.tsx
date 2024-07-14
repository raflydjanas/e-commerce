import { TabsDemo } from "./TabsDemo";

const MainHome = () => {
  return (
    <section className="text-white flex flex-1 flex-col items-center justify-center mt-20 ">
      <h1 className="text-xl">Explore the solutions</h1>
      <TabsDemo />
    </section>
  );
};

export default MainHome;
