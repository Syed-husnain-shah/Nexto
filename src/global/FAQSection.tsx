"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How can I sign up for Nexto?",
    answer: "You can sign up by creating an account on our platform.",
  },
  {
    question: "Can I collaborate with team members on Nexto?",
    answer: "Yes, you can invite team members and collaborate easily.",
  },
  {
    question: "Can I customize the Nexto dashboard to fit my preferences?",
    answer: "Yes, the dashboard is fully customizable.",
  },
  {
    question: "Are there training resources available for using Nexto?",
    answer: "We provide tutorials and documentation.",
  },
  {
    question: "What types of projects is Nexto suitable for?",
    answer: "It works for all types of team and personal projects.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white py-28">
      <div className="max-w-338 mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="inline-block border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full mb-4">
            SAY HELLO
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Image
              src="/image/faq.jpg"
              alt="faq"
              width={600}
              height={600}
              className="rounded-xl object-cover w-full h-137.5"
            />
          </div>

          <div className="space-y-5">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-400 pb-4 b">
                <div
                  className="flex justify-between  items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium">{item.question}</h2>
                  <span className="text-gray-400 bg-light p-0.5">
                    {openIndex === index ? <Minus /> : <Plus />}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;