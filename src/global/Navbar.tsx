"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "@/src/global/Cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/">
            <Image
              src="/image/nexto-logo.svg"
              alt="logo"
              width={110}
              height={40}
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/about" className="hover:text-gray-400 transition duration-300">About us</Link></li>
            <li><Link href="/features" className="hover:text-gray-400">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-gray-400">Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-gray-400">Blogs</Link></li>
            <li><Link href="/integration" className="hover:text-gray-400">Integration</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact us</Link></li>

            <li>
              <button
                onClick={() => setCartOpen(true)}
                className="hover:text-gray-400"
              >
                Cart (0)
              </button>
            </li>
          </ul>

          <div className="hidden md:block">
            <button className="bg-[#111827] px-6 py-2.5 rounded-lg border border-gray-700 hover:bg-transparent transition cursor-pointer">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-4xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4 bg-[#020617]">
            <Link href="/about" className="block">About us</Link>
            <Link href="/features" className="block">Features</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/blog" className="block">Blogs</Link>
            <Link href="/integration" className="block">Integration</Link>
            <Link href="/contact" className="block">Contact us</Link>

            <button
              onClick={() => {
                setCartOpen(true);
                setMenuOpen(false);
              }}
              className="block text-left w-full"
            >
              Cart (0)
            </button>

            <button className="w-full mt-4 bg-[#111827] px-6 py-3 rounded-lg border border-gray-700 cursor-pointer">
              Get Started
            </button>
          </div>
        )}
      </nav>

      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}