import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

const performanceItems = [
  {
    number: "1",
    title: "Cross-platform",
    description:
      "Stay connected, stay productive. Seamlessly manage projects across devices for ultimate flexibility.",
  },
  {
    number: "2",
    title: "Customization",
    description:
      "Craft a tailored digital experience with Nexto's customization features.",
  },
  {
    number: "3",
    title: "Collaboration",
    description:
      "Real-time features, project sharing, and a dedicated client portal for transparent communication.",
  },
];

export const Performance: FC<Props> = () => (
  <section className="w-full bg-[#11151C] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-8 lg:gap-16">

      <div className="flex w-full flex-col gap-4">
        {performanceItems.map((item) => (
          <div
            key={item.number}
            className="flex w-full items-start gap-3 rounded-xl bg-[#161B22] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1c222b] sm:gap-4 sm:p-5 md:p-4 lg:p-6"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#24292F] text-sm font-medium sm:h-10 sm:w-10">
              {item.number}
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-base font-medium sm:text-lg">
                {item.title}
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6 lg:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center justify-center md:h-full">
        <div className="w-full overflow-hidden rounded-xl bg-[#161B22] p-3 sm:p-4 md:p-3 lg:rounded-2xl lg:p-6">
          <Image
            src="/image/performance.svg"
            alt="Nexto Performance"
            width={700}
            height={500}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>

    </div>
  </section>
);