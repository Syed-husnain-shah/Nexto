import React, { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

type Props = {
  name?: string;
};

export const Footer: FC<Props> = () => (
  <footer className="bg-[#020617] text-white mt-16 sm:mt-20 overflow-hidden">
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-6 lg:gap-10">

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white sm:text-base">
            Products
          </h2>

          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            About us
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Features
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Blogs
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Reviews
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Pricing
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white sm:text-base">
            Company
          </h2>

          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Integrations
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Careers
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Contact us
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            FAQ
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white sm:text-base">
            Resources
          </h2>

          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Changelog
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Cookie Policy
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Coming Soon
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Error 404
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white sm:text-base">
            Utilities
          </h2>

          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Licensing
          </p>
          <p className="text-sm text-gray-400 transition-colors hover:text-white cursor-pointer">
            Password
          </p>
        </div>

        <div className="col-span-2 flex flex-col items-center sm:col-span-3 lg:col-span-2 lg:items-end lg:justify-between">

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white cursor-pointer">
              <FaXTwitter />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white cursor-pointer">
              <FaYoutube />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm text-gray-300 transition-all duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white cursor-pointer">
              <FaInstagram />
            </div>
          </div>

          <div className="mt-6 text-center text-xs leading-6 text-gray-400 sm:text-sm lg:text-right">
            <p>© 2026 Nexto, All Rights Reserved</p>
            <p>Designed & Developed by Nexto.</p>
          </div>

        </div>
      </div>

      <div className="mt-12 w-full sm:mt-16 lg:mt-20">
        <Image
          src="/image/footer.svg"
          alt="Nexto Footer"
          width={1200}
          height={200}
          className="block h-auto w-full max-w-full object-contain"
        />
      </div>

    </div>
  </footer>
);

