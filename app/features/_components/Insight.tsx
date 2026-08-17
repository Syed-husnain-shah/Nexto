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

export const Insight: FC<Props> = ({
  name,
  dis,
  btn,
  imgSrc,
  Smallimg,
}) => (
  <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 sm:px-6 md:gap-12 lg:flex-row lg:gap-16 lg:px-8">

      <div className="w-full max-w-2xl lg:w-1/2">
        <h1 className="text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
          {name}
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
          {dis}
        </p>

        <button
          className="
            group
            mt-6
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-gray-700
            px-5
            py-3
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            hover:scale-[1.03]
            hover:border-white
            hover:bg-white
            hover:text-black
            hover:shadow-xl
            active:scale-95
            sm:px-6
          "
        >
          <span>{btn}</span>

          <IoMdArrowForward
            className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>

      <div className="relative w-full max-w-2xl lg:w-1/2">
        <div className="relative overflow-hidden rounded-2xl bg-[#111827] p-3 shadow-lg sm:p-5 md:p-6">
          <Image
            src={imgSrc}
            alt={name || "Insight image"}
            width={700}
            height={450}
            className="h-auto w-full rounded-xl object-cover"
          />

          <div className="absolute bottom-3 right-3 w-24 sm:bottom-5 sm:right-5 sm:w-32 md:bottom-6 md:right-6 md:w-40 lg:w-36">
            <Image
              src={Smallimg}
              alt="Insight detail"
              width={250}
              height={180}
              className="h-auto w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
);

