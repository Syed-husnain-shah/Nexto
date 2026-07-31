import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

const features = [
  {
    img: "/image/analyze.svg",
    title: "Analyze your Data",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
  },
  {
    title: "Secure Shield",
    desc: "Our security solution provides advanced threat detection & encryption to safeguard information.",
    img: "/image/secure.svg",
  },
  {
    title: "Insight Reach",
    desc: "Harness the power of data-driven insights to reach your target audience effectively, with advanced analytics.",
    img: "/image/insight.svg",
  },
];

export const Amazing: FC<Props> = ({ name }) => (
  <section className="mx-auto max-w-334">
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <p className="uppercase border border-gray-700 text-sm w-38 text-center rounded-full">
        Features Explore
      </p>
      <h1 className="text-[38px] font-medium ">Amazing Features</h1>
      <p className="text-gray-500 text-sm mt-4 max-w-xl text-center">
        Explore a world of innovation with our Features, meticulously crafted to
        elevate every aspect of web development, design, & marketing excellence.
      </p>
    </div>
    <div className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className=" border border-gray-700 rounded-sm p-6 flex flex-col justify-between transition bg-[#161B22]"
          >
            <div className="mt-auto mb-20">
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={300}
                className="rounded-lg opacity-90"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
            </div>
            <a href="#" className="mt-20 space-x-4">
              Learn More <span>→</span>
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="border border-gray-500 px-6 py-4 hover:bg-white hover:text-black transition duration-300 cursor-pointer">View All Features <span>→</span> </button>
      </div>
    </div>
  </section>  
);
