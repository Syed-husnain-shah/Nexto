"use client";

import React, { FC } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

type Props = {
  name?: string;
  dis?: string;
  btn?: string;
  imgSrc: string;
  Smallimg: string;
};

export const Insight: FC<Props> = ({ name, dis, btn, imgSrc, Smallimg }) => (
  <section className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
      <div className="max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
          {name}
        </h1>

        <p className="text-sm sm:text-base text-gray-300 mt-4">{dis}</p>

        <button
          className="
          mt-6 
          px-6 py-3 
          border border-gray-700 
          rounded-md 
          flex items-center gap-2 
          hover:bg-white hover:text-black 
          transition
        "
        >
          {btn}
          <IoMdArrowForward className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-full max-w-lg bg-[#111827] p-6 rounded-lg">
        <Image
          src={imgSrc}
          alt="Main Image"
          width={500}
          height={300}
          className="w-full h-auto"
        />

        <Image
          src={Smallimg}
          alt="Small Image"
          width={200}
          height={150}
          className="
            absolute 
            bottom-2 right-2 
            w-24 sm:w-32 md:w-40 
            h-auto
          "
        />
      </div>
    </div>
  </section>
);
