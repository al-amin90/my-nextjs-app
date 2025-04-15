import React from "react";

const FooterLayout = ({ children }) => {
  return (
    <div className="h-dvh">
      <div className="">{children}</div>
      <h1 className="h-20 my-auto w-full bg-gray-800 text-center">
        I am the text footer working on
      </h1>
    </div>
  );
};

export default FooterLayout;
