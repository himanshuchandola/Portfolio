import React, { useEffect, useState } from "react";
import AvailableForHire from "./AvailableForHire";
import TagLine from "./TagLine";
import { motion } from "framer-motion";
import HeaderTechStack from "./HeaderTechStack";

const ActiveComponent = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentComponentIndex === 0) {
        setCurrentComponentIndex(1);
      } else if (currentComponentIndex === 1) {
        setCurrentComponentIndex(2);
      }
    }, 4000); // 4 seconds in milliseconds

    return () => clearTimeout(timeout);
  }, [currentComponentIndex]);

  let ActiveComponent;
  if (currentComponentIndex === 0) {
    ActiveComponent = AvailableForHire;
  } else if (currentComponentIndex === 1) {
    ActiveComponent = TagLine;
  } else {
    ActiveComponent = HeaderTechStack;
  }
  return (
    <motion.div
      key={currentComponentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <ActiveComponent />
    </motion.div>
  );
};

export default ActiveComponent;
