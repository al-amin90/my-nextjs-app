import Navabar from "@/components/shared/Navabar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navabar />
      <div className="min-h-screen">{children}</div>
      <div className="w-full bg-red-500 py-6 text-center"> I am footer </div>
    </div>
  );
};

export default CommonLayout;
