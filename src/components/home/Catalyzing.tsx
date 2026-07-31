import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

export const Catalyzing: FC<Props> = ({ name }) => (
  <section className="text-white py-16 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl lg:text-3xl font-semibold leading-tight mb-6">
          Catalyzing growth in web, design, and marketing excellence
        </h1>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Where seamless collaboration and strategic planning converge for unparalleled success. Your journey to digital success starts here, where every tool and feature serves as a catalyst for achieving & surpassing your goals.
        </p>

        <button className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
          Explore More
          <span>→</span>
        </button>
      </div>

      <div className="relative bg-[#161B22] rounded-sm p-10">
        <div className="-mb-10">
          <Image
            src="/image/catalyzing.jpg"
            alt=""
            height={200}
            width={500}
            className="relative "
          />
        </div>
        <div>
          <Image
            src="/image/catalyzing-1.svg"
            alt=""
            height={200}
            width={400}
            className="absolute bottom-1 left-6  z-10 p-10"
          />
        </div>
      </div>
    </div>
  </section>
);
