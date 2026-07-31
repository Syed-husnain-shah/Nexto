import React, { FC } from 'react';

type Props = {
    name?: string;
};

// import {
//   PieChart,
//   CheckCircle,
//   Lightbulb,
//   Shuffle,
//   RefreshCw,
//   Shield,
//   BarChart3,
//   Cpu,
// } from "lucide-react";

const features = [
  {
    title: "Analyze your Data",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/analyze.svg",
  },
  {
    title: "Insight Reach",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/insight.svg",
  },
  {
    title: "Easy and Intuitive",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/easy.svg",
  },
  {
    title: "Power of Flow",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/power.svg",
  },
  {
    title: "Smart Sync",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/smart.svg",
  },
  {
    title: "Secure Shield",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/secure.svg",
  },
  {
    title: "Embedded Analytics",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/embedded.svg",
  },
  {
    title: "Workflow Automation",
    desc: "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    img : "/image/workflow.svg",
  },
];

export const Explore: FC<Props> = ({ name }) => ( 
        <section>
          <div className='text-center mt-20'>
            <p className='text-center text-[15px] font-normal leading-9 mx-auto uppercase border border-gray-700 w-45 rounded-full'>features explore</p>            
          <h1 className='capitalize text-[38px] font-medium leading-14 mt-4'>amazing features</h1>
          <p className='mx-auto max-w-140 text-gray-400 text-sm font-normal leading-5.25'>Explore a world of innovation with our Features, meticulously crafted to elevate every aspect of web development, design, & marketing excellence.</p>
          </div>

         <div className="bg-[#050816] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-800">
          {features.map((item, index) => {
            const Icon = item.img;
            return (
              <div
                key={index}
                className="p-8 border border-gray-800 rounded-sm"
              >
               <img src={item.img} alt={item.title} className='mb-8' />

                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer flex items-center gap-2">
            Get Started
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
        </section>
);