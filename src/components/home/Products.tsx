import React, { FC } from 'react';
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
    <section className="w-full py-20 px-6 text-center">
      
      <h2 className="text-gray-400 text-lg md:text-xl mb-14">
        <span className="text-white font-semibold">500K+</span> design and product leaders trust Nexto.
      </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 items-center">
        
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-60 cursor-pointer"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={140}
              height={40}
              className="object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
);





