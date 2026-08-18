import React, { FC } from "react";
import { IoMdArrowForward } from "react-icons/io";

type Props = {
  name?: string;
};

export const Success: FC<Props> = () => (
  <section
    className="
      w-full
      overflow-hidden
      bg-[#11151c]
      bg-[url('/image/bannerimg.svg')]
      bg-cover
      bg-center
      bg-no-repeat
      py-16
      text-white
      sm:py-20
      md:py-24
      lg:py-28
    "
  >
    <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-6 lg:px-8">
      <h1
        className="
          mx-auto
          max-w-2xl
          text-2xl
          font-semibold
          leading-tight
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
        "
      >
        Your success story begins here Start Your Free Trial
      </h1>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          leading-6
          text-gray-300
          sm:text-base
          sm:leading-7
          md:mt-6
        "
      >
        Join Nexto today and experience seamless collaboration, innovation, and
        success. Your digital journey begins now.
      </p>

      <div
        className="
          mt-8
          flex
          w-full
          flex-col
          items-center
          justify-center
          gap-3
          sm:mt-10
          sm:flex-row
          sm:gap-4
        "
      >
        <button
          className="
            group
            flex
            w-full
            max-w-xs
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-gray-700
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            hover:scale-105
            hover:border-white
            hover:bg-white
            hover:text-black
            hover:shadow-xl
            active:scale-95
            sm:w-auto
          "
        >
          <span>Signup Now</span>
        </button>

        <button
          className="
            group
            flex
            w-full
            max-w-xs
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-gray-700
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            hover:scale-105
            hover:border-white
            hover:bg-white
            hover:text-black
            hover:shadow-xl
            active:scale-95
            sm:w-auto
          "
        >
          <span>Start Exploring</span>

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
    </div>
  </section>
);
