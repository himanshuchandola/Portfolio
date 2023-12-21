import "./SliderText.css";
import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-450%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="slidingTextContainer pointer-events-none dark:text-[#47474715] text-[#47474710] text-[20vh] md:text-[40vh] lg:text-[50vh] bottom-32 md:-bottom-[30px] lg:-bottom-[50px]"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
    >
      Frontend Developer
    </motion.div>
  );
};

export default Hero;
