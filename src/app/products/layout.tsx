"use client";
import {
  faBars,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className=" bg-[#fafafa]">
      <header className="flex items-center px-6 py-4 shadow-md justify-between sticky top-0 bg-white w-full">
        {/* Left Section: Logo */}
        <h1 className="text-2xl font-semibold cursor-pointer"
        onClick={() => router.push('/')}>My Shopping App</h1>

        {/* Right Section: Search, Cart, and Menu */}
        <div className="flex items-center gap-4">
          {/* Search Bar (Always visible) */}
          <div className="relative hidden md:block">
            <input

              type="text"
              placeholder="Search products..."
              className="w-[300px] px-5 py-2 pl-10 rounded-full bg-gray-100 text-gray-600 focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Cart Icon */}
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => router.push("/cart")}
            className="cursor-pointer text-black text-2xl"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
          </button>
        </div>

        {/* Mobile Search & Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-3 md:hidden">
            {/* Search Bar for Mobile */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-5 py-2 pl-10 rounded-full bg-gray-100 text-gray-600 focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        )}
      </header>

      {children}
      <footer className="p-8 bg-[#f4f4f4] border-t-2 border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-[40%]">
              <h1 className="font-bold text-lg">PRODUCT</h1>
              <p className="text-gray-500 text-[14px] mt-2">
                Premium tech products designed with precision and care.
                Experience the perfect balance of form and function.
              </p>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="flex gap-12 justify-end">
                <div>
                  <h3 className="font-bold text-[14px] mb-2">Shop</h3>
                  <ul className="text-gray-500 text-[14px] space-y-1">
                    <li>All Products</li>
                    <li>New Arrivals</li>
                    <li>Featured</li>
                    <li>Sale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[14px] mb-2">Company</h3>
                  <ul className="text-gray-500 text-[14px] space-y-1">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Press</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[14px] mb-2">Support</h3>
                  <ul className="text-gray-500 text-[14px] space-y-1">
                    <li>Help Center</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Warranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-[#e0e0e0]" />
          <div className="flex flex-col md:flex-row justify-between text-gray-500 text-[14px]">
            <p>© 2023 Product Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
