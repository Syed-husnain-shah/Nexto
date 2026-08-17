import React, { FC } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

type Props = {
  name?: string;
};

export const HomeSection: FC<Props> = () => (
  <div className="bg-[url('/image/bannerimg.svg')] bg-cover bg-center text-white">
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <p className="border border-gray-500 w-fit px-4 py-1 rounded-full text-sm">
        Complete Solutions
      </p>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-6 items-start">
        <h1
          className="
          text-3xl sm:text-4xl md:text-5xl 
          font-semibold 
          leading-tight 
          max-w-xl
        "
        >
          Experience the future of SaaS with Nexto
        </h1>

        <div className="max-w-xl">
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Where we are not just crafting solutions; we are sculpting
            excellence. Our platform, designed for web development, design, and
            marketing, is a testament to seamless innovation that transforms
            challenges into opportunities.
          </p>
          <div className="mt-12">
            <button
              className="
      group
      flex items-center gap-2
      rounded-lg
      border border-gray-700
      px-6 py-3
      text-sm font-medium text-white
      cursor-pointer
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:scale-105
      hover:border-white
      hover:bg-white
      hover:text-black
      hover:shadow-xl
      active:scale-95
    "
            >
              <span>Get Started</span>

              <span
                className="
        inline-block
        transition-transform duration-300
        group-hover:translate-x-1
      "
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Image
          src="/image/dashboard.svg"
          alt="Hero Image"
          width={1200}
          height={800}
          className="w-full h-auto max-w-5xl mx-auto"
        />
      </div>
    </div>
  </div>
);
