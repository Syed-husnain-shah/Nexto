import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

const companies = [
  { name: "Luminous", logo: "/image/products.svg" },
  { name: "Hourglass", logo: "/image/products.svg" },
  { name: "Capsule", logo: "/image/products.svg" },
  { name: "Lightbox", logo: "/image/products.svg" },
  { name: "Spherule", logo: "/image/products.svg" },
  { name: "Sisyphus", logo: "/image/products.svg" },
  { name: "Command+R", logo: "/image/products.svg" },
  { name: "FocalPoint", logo: "/image/products.svg" },
];

export const Products: FC<Props> = ({ name }) => (
  <section className="w-full overflow-hidden px-5 py-12 text-center text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">

    <div className="mx-auto w-full max-w-3xl">
      <h2 className="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg lg:text-xl">
        <span className="font-semibold text-white">500K+</span>{" "}
        design and product leaders trust Nexto.
      </h2>
    </div>

    <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 items-center gap-x-4 gap-y-6 sm:mt-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 md:mt-14 md:grid-cols-4 md:gap-x-8 md:gap-y-10 lg:gap-x-12 lg:gap-y-12">

      {companies.map((company, index) => (
        <div
          key={index}
          className="
            group
            flex
            min-h-[60px]
            items-center
            justify-center
            rounded-xl
            px-3
            py-3
            opacity-60
            transition-all
            duration-300
            hover:-translate-y-1
            hover:opacity-100
            sm:min-h-[70px]
            sm:px-4
            sm:py-4
          "
        >
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={160}
            height={50}
            className="
              h-auto
              max-h-10
              w-auto
              max-w-[120px]
              object-contain
              grayscale
              transition-all
              duration-300
              group-hover:grayscale-0
              sm:max-h-11
              sm:max-w-[140px]
              md:max-w-[150px]
              lg:max-w-[160px]
            "
          />
        </div>
      ))}

    </div>
  </section>
);