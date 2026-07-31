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
  <footer className="bg-[#020617] text-white mt-20">
    
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
        
        <div className="space-y-3">
          <h1 className="text-base font-medium">Products</h1>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">About us</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Features</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Blogs</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Reviews</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Pricing</p>
        </div>

        <div className="space-y-3">
          <h1 className="text-base font-medium">Company</h1>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Integrations</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Careers</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Contact us</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">FAQ</p>
        </div>

        <div className="space-y-3">
          <h1 className="text-base font-medium">Resources</h1>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Changelog</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Cookie Policy</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Coming Soon</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Error 404</p>
        </div>

        <div className="space-y-3">
          <h1 className="text-base font-medium">Utilities</h1>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Terms & Conditions</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Licensing</p>
          <p className="text-gray-400 text-sm hover:text-white cursor-pointer">Password</p>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-between">
          
          <div className="flex gap-4 lg:justify-end">
            <div className="border border-gray-600 p-2 rounded-full hover:bg-gray-700 cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="border border-gray-600 p-2 rounded-full hover:bg-gray-700 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="border border-gray-600 p-2 rounded-full hover:bg-gray-700 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="border border-gray-600 p-2 rounded-full hover:bg-gray-700 cursor-pointer">
              <FaInstagram />
            </div>
          </div>

          <div className="text-sm text-gray-400 mt-6 lg:text-right">
            <p>© 2023 Nexto, All Rights Reserved</p>
            <p>Designed by Nixar. Powered by Webflow.</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Image
          src="/image/footer.svg"
          alt="Footer Logo"
          width={1200}
          height={200}
          className="w-full h-auto"
        />
      </div>

    </div>
  </footer>
);