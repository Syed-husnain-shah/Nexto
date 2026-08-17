import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

const blog = [
  {
    title: "task automation",
    img: "/image/blog-1.jpg",
    para: "Experience the efficiency revolution with Nexto's task automation—redefining project management for streamlined workflows.",
    desc: "project management with Nexto's task automation.",
    author: "esther howard",
    date: "december 26, 2026"
  },
  {
    img: "/image/blog-2.jpg",
    title: "advanced analytics",
    desc: "guiding growth the power of Nexto's advanced analytics.",
    para: "Nexto's advanced analytics a deep dive into transformative insights. Catalyze growth and make informed decisions that reshape the narrative of your projects.",
    author: "cameron williamson",
    date: "december 26, 2026"
  },
];

export const Blog: FC<Props> = ({ name }) => (
  <section className="mx-auto max-w-334">
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <p className="uppercase border border-gray-700 text-sm w-24 text-center rounded-full">
        our blog
      </p>
      <h1 className="text-[38px] font-medium capitalize">
        article & resources
      </h1>
    </div>
    <div className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center justify-center">
        {blog.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 flex flex-col justify-between transition"
          >
            <div>
              <div className="mt-auto">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                />
              </div>
              <p className="uppercase text-gray-400 text-sm font-semibold mb-2">
                {item.title}
              </p>
              <h3 className="capitalize text-xl mb-3">{item.desc}</h3>
              <p className="mb-3 text-gray-400 leading-5 font-normal">
                {item.para}
              </p>
              <p className="capitalize text-gray-400">
                {item.author}{" "}
                <span className="mx-2 text-5xl items-center">.</span>{" "}
                {item.date}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
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
          <span>View All Blog</span>

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
  </section>
);
