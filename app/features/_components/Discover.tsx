import React, { FC } from "react";
import { IoMdArrowForward } from "react-icons/io";

type Props = {
  name?: string;
};

const plans = [
  {
    title: "Premium Plan",
    price: "$99.99 USD",
    desc: "Discover our exclusive premium plan",
  },
  {
    title: "Standard Plan",
    price: "$49.99 USD",
    desc: "Unlock advanced reporting and analytics",
  },
  {
    title: "Basic Plan",
    price: "$19.99 USD",
    desc: "Just pay for small businesses and startups",
  },
];

export const Discover: FC<Props> = () => (
  <section className="bg-[url('/image/inte1.svg')] bg-cover bg-center py-16 md:py-24 text-white">
    
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-start">
      
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
          Discover the Right Plan for Your Unique Needs
        </h1>
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
            <span>Start Your Plan</span>

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

      <div className="lg:w-1/2 w-full border border-gray-700 rounded-lg p-6 md:p-10">
        
        <h2 className="text-2xl font-medium mb-6">Our Plans</h2>

        <div className="space-y-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-700 pb-5"
            >
              
              <div>
                <p className="text-gray-400 text-sm">{plan.title}</p>
                <h3 className="text-lg md:text-xl font-medium">
                  {plan.price}
                </h3>
              </div>

              <p className="text-sm text-gray-400 max-w-xs">
                {plan.desc}
              </p>

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
                  <span>Get Started</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);