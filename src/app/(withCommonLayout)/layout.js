import Navabar from "@/components/shared/Navabar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navabar />
      {children}
    </div>
  );
};

export default CommonLayout;
