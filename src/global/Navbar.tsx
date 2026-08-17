"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "@/src/global/Cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="relative z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

          <Link href="/" onClick={closeMenu} className="shrink-0">
            <Image
              src="/image/nexto-logo.svg"
              alt="Nexto logo"
              width={110}
              height={40}
              className="h-auto w-[90px] sm:w-[100px] md:w-[110px]"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-6 text-sm lg:flex xl:gap-8">
            <li>
              <Link
                href="/about"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                href="/features"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/integration"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Integration
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Contact us
              </Link>
            </li>

            <li>
              <button
                onClick={() => setCartOpen(true)}
                className="transition-colors duration-300 hover:text-gray-400"
              >
                Cart (0)
              </button>
            </li>
          </ul>

          <div className="hidden lg:block">
            <button
              className="
                rounded-lg
                border
                border-gray-700
                bg-[#111827]
                px-5
                py-2.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white
                hover:bg-white
                hover:text-black
                hover:shadow-lg
                active:scale-95
                xl:px-6
              "
            >
              Get Started
            </button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-gray-700
              text-xl
              text-white
              transition-all
              duration-300
              hover:border-gray-500
              hover:bg-[#111827]
              active:scale-95
              lg:hidden
            "
          >
            <span
              className={`transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-gray-800 bg-[#020617] transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

            <div className="flex flex-col gap-1">

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                About us
              </Link>

              <Link
                href="/features"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                Features
              </Link>

              <Link
                href="/pricing"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                Pricing
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                Blogs
              </Link>

              <Link
                href="/integration"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                Integration
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                Contact us
              </Link>

              <button
                onClick={() => {
                  setCartOpen(true);
                  setMenuOpen(false);
                }}
                className="w-full rounded-lg px-3 py-3 text-left text-sm transition-all duration-200 hover:bg-[#111827] hover:text-gray-300"
              >
                Cart (0)
              </button>

              <button
                className="
                  mt-3
                  w-full
                  rounded-lg
                  border
                  border-gray-700
                  bg-[#111827]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                  hover:shadow-lg
                  active:scale-[0.98]
                "
              >
                Get Started
              </button>

            </div>
          </div>
        </div>
      </nav>

      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}