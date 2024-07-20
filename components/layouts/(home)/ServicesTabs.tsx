import Image from "next/image";

const ServicesTabs = () => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-900 to-violet-950 ">
      <h3 className="text-3xl mb-4">The Best Online Shopping Experience Awaits!</h3>
      <div className="flex justify-between items-center h-full w-full">
        <p className="text-center hidden md:block text-slate-300 mx-3 text-base max-w-xl">
          Enjoy the best online shopping experience with a wide range of products, exciting offers, fast delivery, secure payment methods, and 24/7 customer service. Join our loyalty program and
          experience the convenience of shopping at a trusted e-commerce platform!
        </p>

        <Image src="/images/service.svg" alt="dummy image" width={500} height={500} />
      </div>
    </div>
  );
};

export default ServicesTabs;
