import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

export const Mastering: FC<Props> = ({ name }) => (
  <section className="text-white py-16 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl lg:text-3xl font-semibold leading-tight mb-6">
          Mastering Digital Solutions
        </h1>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Where we masterfully craft complete solutions for digital excellence.
          In the dynamic landscape of web development, design, and marketing
          strategy, we take pride in seamlessly blending innovation and
          precision.
        </p>

        <button className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
          Explore More
          <span>→</span>
        </button>
      </div>

      <div className="relative bg-[#161B22] rounded-sm p-10">
        <div className="-mb-10">
          <Image
            src="/image/mastering.jpg"
            alt=""
            height={200}
            width={500}
            className="relative "
          />
        </div>
        <div>
          <Image
            src="/image/mastering-1.svg"
            alt=""
            height={200}
            width={400}
            className="absolute bottom-5 right-6  z-10 p-10"
          />
        </div>
      </div>
    </div>
  </section>
);
