import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

export const Mastering: FC<Props> = ({ name }) => (
  <section className="w-full overflow-hidden px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">

      <div className="relative mx-auto order-2 w-full max-w-2xl md:order-1">
        <div className="relative overflow-hidden rounded-2xl bg-[#161B22] p-4 sm:p-6 md:p-5 lg:p-8">

          <div className="w-full">
            <Image
              src="/image/mastering.jpg"
              alt="Mastering Digital Solutions"
              width={700}
              height={450}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-3 right-3 w-28 sm:bottom-5 sm:right-5 sm:w-36 md:bottom-5 md:right-5 md:w-40 lg:bottom-6 lg:right-6 lg:w-48">
            <Image
              src="/image/mastering-1.svg"
              alt="Digital solution interface"
              width={400}
              height={250}
              className="h-auto w-full rounded-lg shadow-2xl"
            />
          </div>

        </div>
      </div>

      <div className="order-1 w-full md:order-2">
        <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
          Mastering Digital Solutions
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
          Where we masterfully craft complete solutions for digital excellence.
          In the dynamic landscape of web development, design, and marketing
          strategy, we take pride in seamlessly blending innovation and
          precision.
        </p>

        <div className="mt-8 sm:mt-10">
          <button
            className="
              group
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
            <span>Explore More</span>

            <span
              className="
                inline-block
                transition-transform
                duration-300
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