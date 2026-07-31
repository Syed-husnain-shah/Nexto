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

        <button className="
          mt-6 
          border border-gray-700 
          px-6 py-3 
          rounded-md 
          flex items-center gap-2 
          mx-auto lg:mx-0
          hover:bg-white hover:text-black 
          transition
        ">
          Start Your Plan
          <IoMdArrowForward className="w-5 h-5" />
        </button>
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

              <button className="
                border border-gray-700 
                px-4 py-2 
                rounded-md 
                text-sm 
                hover:bg-white hover:text-black 
                transition
                w-fit
              ">
                Get Started
              </button>

            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);