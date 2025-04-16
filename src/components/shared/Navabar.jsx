"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navabar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="bg-blue-600 py-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MySite
        </Link>
        <div className="space-x-6">
          <Link
            href="/about"
            className={
              pathName == "/about"
                ? "text-blue-800 underline"
                : "hover:text-gray-200 hover:underline text-white"
            }
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={
              pathName == "/contact"
                ? "text-blue-800 underline"
                : "hover:text-gray-200 hover:underline text-white"
            }
          >
            Contact Us
          </Link>
          <Link
            href="/products"
            className={
              pathName == "/products"
                ? "text-blue-800 underline"
                : "hover:text-gray-200 hover:underline text-white"
            }
          >
            products
          </Link>
          <Link
            href="/gallery"
            className={
              pathName == "/products"
                ? "text-blue-800 underline"
                : "hover:text-gray-200 hover:underline text-white"
            }
          >
            Gallery
          </Link>
          <Link href="/dashboard" className="hover:text-gray-200">
            dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
