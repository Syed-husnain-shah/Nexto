import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

export const About: FC<Props> = ({ name }) => (
  <section className="mx-auto max-w-334">
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <p className="uppercase border border-gray-700 text-[12px] font-normal w-30 text-center rounded-full">
        our story
      </p>
      <h1 className="text-[38px] font-medium ">About us</h1>
    </div>
    <div className="py-16 px-6 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/image/about-1.jpg"
            alt="Team working"
            className="w-full h-full rounded-sm object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/image/about-2.jpg"
              alt="Team working"
              className="w-full h-full rounded-sm object-cover"
            />
          </div>

          <div>
            <h2 className="text-[32px] font-medium leading-12 text-white mb-4 mt-4">
              Our Mission & Vision
            </h2>

            <p className="text-[16px] font-normal text-gray-400 mb-4">
              At Nexto, we understand the importance of both creativity &
              functionality. Driven by a mission to elevate digital excellence,
              we strive to provide innovative solutions that seamlessly
              integrate design, development, and marketing.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We believe in the power of holistic collaboration and the impact
              it can have on shaping outstanding projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
