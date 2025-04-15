import Link from "next/link";
import React from "react";

const Navabar = () => {
  return (
    <nav className="bg-blue-600 py-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MySite
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact Us
          </Link>
          <Link href="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link href="/register" className="hover:text-gray-200">
            Registers
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
