import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 2],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.7, 0.5, 0],
        borderRadius: ["20%", "20%", "50%", "60%", "20%"],
      }}
      transition={{ duration: 3 }}
      className="relative flex justify-center items-center -z-9"
    >
      <div className="absolute border dark:border-amber-500 border-indigo-700 opacity-60 rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      <div className="absolute border dark:border-amber-500 border-indigo-700 opacity-60 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border dark:border-amber-500 border-indigo-700 opacity-40 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="rounded-full absolute opacity-20 h-[600] w-[600] mt-52 animate-pulse dark:border-amber-500 border-indigo-400" />
      <div className="absolute border dark:border-amber-500 border-indigo-700 opacity-40 rounded-full h-[200px] w-[200px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
