"use client";

import React, { FC } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

type Props = {
  name?: string;
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email us:",
    value: "hello@nexto.io",
  },
  {
    icon: Phone,
    title: "Call us:",
    value: "(480) 555-0103",
  },
  {
    icon: MapPin,
    title: "Address:",
    value: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
];

export const ContactUs: FC<Props> = () => (
  <section className="w-full overflow-hidden px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div className="mx-auto w-full max-w-7xl">

      {/* Header */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
        <span className="inline-flex rounded-full border border-gray-700 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] text-gray-300 sm:text-xs">
          SAY HELLO
        </span>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Contact with us
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
          Have a question or want to work together? Send us a message and
          we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Get in Touch
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            Let's start a conversation! Use the form to send us a message,
            and we'll get back to you as soon as possible.
          </p>

          <div className="relative mt-10 sm:mt-14">

            {/* Timeline */}
            <div className="absolute bottom-10 left-6 top-6 w-px bg-gray-800" />

            <div className="space-y-8 sm:space-y-10">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative flex items-start gap-4 sm:gap-5"
                  >
                    <div
                      className="
                        relative z-10
                        flex h-12 w-12 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-gray-800
                        bg-[#0f172a]
                        transition-all duration-300
                        group-hover:border-gray-600
                        group-hover:bg-[#182235]
                      "
                    >
                      <Icon className="h-5 w-5 text-gray-300 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="pt-1">
                      <p className="text-sm font-medium text-gray-200">
                        {item.title}
                      </p>

                      <p className="mt-1 max-w-sm text-sm leading-6 text-gray-400 sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full rounded-2xl border border-gray-800 bg-[#0b0f16] p-5 sm:p-7 md:p-8 lg:p-10">
          <form className="space-y-7">

            {/* Name */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-300"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="
                    mt-2
                    w-full
                    border-b border-gray-800
                    bg-transparent
                    px-0 py-3
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-600
                    transition-colors duration-300
                    focus:border-gray-400
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-300"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="
                    mt-2
                    w-full
                    border-b border-gray-800
                    bg-transparent
                    px-0 py-3
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-600
                    transition-colors duration-300
                    focus:border-gray-400
                  "
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="
                    mt-2
                    w-full
                    border-b border-gray-800
                    bg-transparent
                    px-0 py-3
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-600
                    transition-colors duration-300
                    focus:border-gray-400
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-300"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    mt-2
                    w-full
                    border-b border-gray-800
                    bg-transparent
                    px-0 py-3
                    text-sm text-white
                    outline-none
                    placeholder:text-gray-600
                    transition-colors duration-300
                    focus:border-gray-400
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message here..."
                className="
                  mt-2
                  w-full
                  resize-none
                  border-b border-gray-800
                  bg-transparent
                  px-0 py-3
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-colors duration-300
                  focus:border-gray-400
                "
              />
            </div>

            {/* Submit */}
            <div className="flex justify-start pt-2 sm:justify-end">
              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border border-gray-700
                  px-7 py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  hover:shadow-xl
                  active:scale-95
                  sm:w-auto
                "
              >
                <span>Submit</span>

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </section>
);