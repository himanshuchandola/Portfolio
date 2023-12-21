import React from "react";

const BlurCircles = () => {
  return (
    <div className="relative w-full max-w-lg -z-0">
      <div className="absolute top-0 -left-4 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-[45px] opacity-60 dark:opacity-60 animate-blob z-0"></div>
      <div className="absolute top-0 -right-4 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-[#7000ff] rounded-full mix-blend-multiply filter blur-[45px] opacity-60 dark:opacity-60 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-20 left-24 w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-[#fc3af2] rounded-full mix-blend-multiply filter blur-[45px] opacity-60 dark:opacity-60 animate-blob animation-delay-4000 z-0"></div>
    </div>
  );
};

export default BlurCircles;
