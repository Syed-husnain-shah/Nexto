import React, { FC } from "react";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
type Props = {
  name?: string;
};
const posts = [
  {
    id: 1,
    category: "TASK AUTOMATION",
    title: "Project management with Nexto's task automation",
    description:
      "Experience the efficiency revolution with Nexto's task automation—redefining project management for streamlined workflows.",
    author: "Esther Howard",
    date: "December 26, 2023",
    image: "/image/blog-1.jpg",
  },
  {
    id: 2,
    category: "ADVANCED ANALYTICS",
    title: "Guiding growth the power of Nexto's advanced analytics",
    description:
      "Nexto's advanced analytics a deep dive into transformative insights. Catalyze growth and make informed decisions that reshape the narrative of your projects.",
    author: "Cameron Williamson",
    date: "December 26, 2023",
    image: "/image/blog-2.jpg",
  },
  {
    id: 3,
    category: "TASK AUTOMATION",
    title: "Design mastery with Nexto a user-centric experiences",
    description:
      "Experience the efficiency revolution with Nexto's task automation—redefining project management for streamlined workflows.",
    author: "Esther Howard",
    date: "December 26, 2023",
    image: "/image/article3.jpg",
  },
  {
    id: 4,
    category: "ADVANCED ANALYTICS",
    title: "Collaborative transformation impact on team dynamics",
    description:
      "Nexto's advanced analytics a deep dive into transformative insights. Catalyze growth and make informed decisions that reshape the narrative of your projects.",
    author: "Cameron Williamson",
    date: "December 26, 2023",
    image: "/image/article4.jpg",
  },
  {
    id: 5,
    category: "TASK AUTOMATION",
    title: "Digital potential redefined Nexto's insights and tips",
    description:
      "Experience the efficiency revolution with Nexto's task automation—redefining project management for streamlined workflows.",
    author: "Esther Howard",
    date: "December 26, 2023",
    image: "/image/article5.jpg",
  },
  {
    id: 6,
    category: "ADVANCED ANALYTICS",
    title: "Explore latest tech trends shaping the digital landscape",
    description:
      "Nexto's advanced analytics a deep dive into transformative insights. Catalyze growth and make informed decisions that reshape the narrative of your projects.",
    author: "Cameron Williamson",
    date: "December 26, 2023",
    image: "/image/article6.jpg",
  },
];
export const Resources: FC<Props> = ({ name }) => (
  <div className="">
    <div className="flex flex-col items-center justify-center text-center mt-20 ">
      <p className="border border-gray-700 text-sm w-22 text-center rounded-full">
        Our Blogs
      </p>
      <h1 className="text-[38px] font-medium ">Articles & Resources</h1>
    </div>
    <main className="  px-6 mt-10 ">
      <div className="max-w-338 mx-auto grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className=" rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-90 hover:scale-101 transition duration-500">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-white">
              <p className="text-xs tracking-widest text-gray-400 mb-3">
                {post.category}
              </p>

              <h2 className="text-[21px] font-semibold leading-snug mb-3">
                {post.title}
              </h2>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {post.description}
              </p>

              <div className="text-sm text-gray-500">
                {post.author} <span className="mx-2">•</span> {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
    <button className="  border border-gray-700 text-sm  w-38 text-center  px-3 mt-10 h-12 rounded-sm flex    items-center justify-center  mx-auto gap-2 hover:bg-white hover:text-black transition-colors duration-400">
      View All Blogs
      <IoMdArrowForward className="size-5" />
    </button>
  </div>
);