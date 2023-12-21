import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";

const SkillsDescription = () => {
  return (
    <div className="text-left lg:pt-0">
      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-2xl text-amber-500 dark:text-amber-200 mt-5 mb-5"
      >
        <Reveal width="100%">
          A look at all the programming languages, libraries, and tools I've
          worked with.
        </Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        In the expansive field of web development, I've acquired diverse
        experience in &nbsp;
        <span className="font-semibold">Front-End Web Development</span>
      </motion.p>

      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5"
      >
        <Reveal width="100%">Front-End</Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        I love creating something that is clean and minimalistic, attractive and
        has value, and of course, easy to use.
      </motion.p>

      <div className="flex">
        <div className="">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            React
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            I really enjoy building web applications and React is my go-to
            library.
          </motion.p>
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            Next.js
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            Although I'm still relatively new to Next.js, I find it to be a
            highly valuable tool with impressive capabilities. Its quality is
            truly commendable.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
