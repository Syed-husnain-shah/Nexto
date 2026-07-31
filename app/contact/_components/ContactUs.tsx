import React, { FC } from 'react';

type Props = {
    name?: string;
};

import { Mail, Phone, MapPin } from "lucide-react";


export const ContactUs: FC<Props> = ({ name }) => ( 
       <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-center mb-6">
          <span className="text-xs tracking-widest border border-gray-700 rounded-full px-4 py-1 text-gray-300">
            SAY HELLO
          </span>
        </div>

        <h1 className="text-center text-5xl md:text-6xl font-semibold mb-20">
          Contact with us
        </h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-400 max-w-md mb-16 leading-relaxed">
              Let's start a conversation! Use the form to send us a message, and we'll
              get back to you as soon as possible.
            </p>

            <div className="relative">
              
              <div className="absolute left-6 top-0 h-60 w-px bg-gray-800" />

              <div className="space-y-16">
                
                <div className="flex gap-6 relative">
                  <div className="z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0f172a] border border-gray-800">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Email us:</p>
                    <p className="text-gray-400">hello@nexto.io</p>
                  </div>
                </div>

                <div className="flex gap-6 relative">
                  <div className="z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0f172a] border border-gray-800">
                    <Phone className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Call us:</p>
                    <p className="text-gray-400">(480) 555-0103</p>
                  </div>
                </div>
                <div className="flex gap-6 relative">
                  <div className="z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0f172a] border border-gray-800">
                    <MapPin className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Address:</p>
                    <p className="text-gray-400 max-w-xs leading-relaxed">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="w-full">
            <form className="space-y-12">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="text-sm text-gray-300">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full bg-transparent border-b border-gray-800 py-3 outline-none text-gray-400 placeholder-gray-500 focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full bg-transparent border-b border-gray-800 py-3 outline-none text-gray-400 placeholder-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-gray-800 py-3 outline-none text-gray-400 placeholder-gray-500 focus:border-gray-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-b border-gray-800 py-3 outline-none text-gray-400 placeholder-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message here..."
                  className="w-full bg-transparent border-b border-gray-800 py-3 outline-none text-gray-400 placeholder-gray-500 resize-none focus:border-gray-500"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="border border-gray-700 px-8 py-3 rounded-md text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
);