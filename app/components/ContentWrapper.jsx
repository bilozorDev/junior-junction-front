import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
      {children}
    </div>
  );
};

export default ContentWrapper;
