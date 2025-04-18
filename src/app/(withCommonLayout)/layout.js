import Navabar from "@/components/shared/Navabar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navabar />
      {/* this is not the work i want to do asdkljsldkflksadfjd kasdkl */}
      {/* this is not the work i want to do asdkljsldkflksadfjd kasdkl */}
      {/* this is not the work i want to do asdkljsldkflksadfjd kasdkl */}
      {/* this is not the work i want to do asdkljsldkflksadfjd kasdkl */}
      {/* this is not the work i want to do asdkljsldkflksadfjd kasdkl */}
      {/* this is not the work i want to do asdkljsldkflksadfjd kasdkl */}
      <div className="min-h-screen">{children}</div>
      <div className="w-full bg-red-500 py-6 text-center"> I am footer </div>
    </div>
  );
};

export default CommonLayout;
