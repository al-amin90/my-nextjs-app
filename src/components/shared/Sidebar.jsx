import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-400 text-white p-3">
      <h1 className="text-2xl font-bold mb-6">My Sidebar</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-200 block px-4 py-2 rounded">
          Home
        </Link>
        <Link href="/profile" className="hover:text-gray-200 block px-4 py-2 rounded">
          Profile
        </Link>
        <Link href="/settings" className="hover:text-gray-200 block px-4 py-2 rounded">
          settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
