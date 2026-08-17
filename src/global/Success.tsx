import React, { FC } from "react";
import { IoMdArrowForward } from "react-icons/io";

type Props = {
  name?: string;
};

export const Success: FC<Props> = () => (
  <section className="bg-[#11151c] bg-[url('/image/bannerimg.svg')] bg-cover bg-center py-16 md:py-24 text-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-snug">
        Your success story begins here Start Your Free Trial
      </h1>

      <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mt-5">
        Join Nexto today and experience seamless collaboration, innovation, and
        success. Your digital journey begins now.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <div className="flex justify-center mt-12">
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
            <span>Signup Now</span>
          </button>
        </div>
        <div className="flex justify-center mt-12">
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
            <span>Start Exploring</span>

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
  </section>
);