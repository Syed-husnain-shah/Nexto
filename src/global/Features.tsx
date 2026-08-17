
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
    desc: "Automate repetitive tasks and maximize your team's productivity with Nexto.",
    img: "/image/task.svg",
  },
  {
    tag: "Cutting-edge",
    title: "Advanced Analytics",
    desc: "Turn your data into actionable insights and make smarter business decisions.",
    img: "/image/advanced.svg",
  },
  {
    tag: "Integrated",
    title: "Design Mockup Integration",
    desc: "Seamlessly integrate your design concepts and refine them within Nexto.",
    img: "/image/design.svg",
  },
  {
    tag: "Harmonious",
    title: "Workflow Management",
    desc: "Create smooth, organized workflows that keep your projects moving efficiently.",
    img: "/image/task-1.svg",
  },
  {
    tag: "Robust",
    title: "Security and Data Privacy",
    desc: "Keep your valuable information protected with reliable security and privacy controls.",
    img: "/image/security.svg",
  },
  {
    tag: "Customizable",
    title: "Customization Options",
    desc: "Personalize your workspace and adapt Nexto to match your team's unique needs.",
    img: "/image/customization.svg",
  },
];

export const Features: FC<Props> = ({ title, heading, para }) => (
  <section className="mx-auto w-full max-w-7xl">
    <div className="mt-16 flex flex-col items-center justify-center px-6 text-center sm:mt-20">
      <p className="w-fit rounded-full border border-gray-700 px-4 py-1 text-sm text-gray-300">
        {title}
      </p>

      <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-[38px]">
        {heading}
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
        {para}
      </p>
    </div>

    <div className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between rounded-2xl border border-gray-700 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-500 sm:p-6"
          >
            <div>
              <span className="mb-4 inline-block w-fit rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                {item.tag}
              </span>

              <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
                {item.title}
              </h3>

              <p className="mb-6 text-sm leading-6 text-gray-400">
                {item.desc}
              </p>
            </div>

            <div className="mt-auto overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="h-auto w-full rounded-lg opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
