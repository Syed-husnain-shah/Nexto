import React, { FC } from "react";
import Image from "next/image";

type Props = {
  title?: string;
  heading?: string;
  para?: string;
};

const features = [
  {
    tag: "Automated",
    title: "Task Automation",
    desc: "Maximize efficiency with Nexto's Task Automation.",
    img: "/image/task.svg",
  },
  {
    tag: "Cutting-edge",
    title: "Advanced Analytics",
    desc: "Optimize your strategies with Nexto's Advanced Analytics.",
    img: "/image/advanced.svg",
  },
  {
    tag: "Integrated",
    title: "Design Mockup Integration",
    desc: "Effortlessly integrate and refine design concepts within Nexto.",
    img: "/image/design.svg",
  },
  {
    tag: "Harmonious",
    title: "Task Automation",
    desc: "Boost creativity, efficiency seamlessly.",
    img: "/image/task-1.svg",
  },
  {
    tag: "Robust",
    title: "Security and Data Privacy",
    desc: "Trust Nexto's robust security measures to safeguard your data.",
    img: "/image/security.svg",
  },
  {
    tag: "Customizable",
    title: "Customization Options",
    desc: "Personalize your workflow with Nexto's options.",
    img: "/image/customization.svg",
  },
];

export const Features: FC<Props> = ({ title, heading, para }) => (
  <section className="mx-auto max-w-334">
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <p className="border border-gray-700 text-sm w-24 text-center rounded-full">
        {title}
      </p>
      <h1 className="text-[38px] font-medium ">{heading}</h1>
      <p className="mx-auto max-w-2xl text-gray-500">{para}</p>
    </div>
    <div className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className=" border border-gray-700 rounded-2xl p-6 flex flex-col justify-between hover:border-gray-600 transition"
          >
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full w-fit mb-4 text-gray-300">
              {item.tag}
            </span>

            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
            </div>

            <div className="mt-auto">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-lg opacity-90"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
