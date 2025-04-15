'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter()

  const handleNavigation = () => {
    router.push('/dashboard')
  }

  return (
    <div className="text-center">
      <h1>hello world</h1>
      {/* <Link href='/dashboard'> */}
        <button onClick={handleNavigation} className="p-2 border-b-fuchsia-500 rounded-md">
          Dashboard
        </button>
      {/* </Link> */}
    </div>
  );
};

export default HomePage;
