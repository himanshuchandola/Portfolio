import React from "react";

const YellowCircleBg = () => {
  return (
    <div className="relative w-full max-w-lg -z-0">
      <div className="absolute top-0 -left-4 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-[90px] opacity-60 dark:opacity-60 animate-blob z-0" />
    </div>
  );
};

export default YellowCircleBg;
