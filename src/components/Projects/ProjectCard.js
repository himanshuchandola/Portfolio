import React from "react";
import { motion } from "framer-motion";
//
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { motionStep } from "./Motion";
import { BiLinkAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
//

const ProjectCard = ({ live, thumbnail, code, title, description, tech }) => {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 50,
          },
        },

        hidden: {
          opacity: 0,
          y: 50,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 1 * 20 + 50,
          },
        },
      }}
      {...motionStep}
      className="col-span-12 sm:col-span-6 md:col-span-4 bg-gray-50 dark:bg-neutral-900 rounded-xl p-4 group shadow-lg shadow-gray-400/50 dark:shadow-black/30 z-20"
    >
      <div>
        <a href={`${live}`}>
          <div className="h-[200px] w-full relative rounded-xl overflow-hidden">
            <img
              src={thumbnail}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              alt="loading..."
            />

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-900/50 transition-all duration-300 cursor-pointer group-hover:opacity-0" />
          </div>
        </a>
      </div>

      <div>
        <div className="flex items-center justify-between my-5">
          <BsFillBookmarkStarFill className="text-2xl" />

          <div
            className={
              "flex justify-end items-center gap-3 text-neutral-700 dark:text-neutral-300"
            }
          >
            {live && (
              <a
                href={`${live}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 p-2 rounded-md dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 hover:scale-110 text-2xl"
              >
                <BiLinkAlt />
              </a>
            )}

            {code && (
              <a
                href={`${code}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 p-2 rounded-md dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 hover:scale-90 text-2xl"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        <h1 className="text-xl font-medium mb-1"> {title} </h1>
        <p className="dark:text-neutral-200 text-neutral-600 text-sm">
          {" "}
          {description}{" "}
        </p>

        <div className="flex justify-center dark:text-neutral-300 text-neutral-700 mt-7 gap-x-4 flex-wrap">
          {tech.map((e, i) => (
            <span
              className="p-2 rounded-md dark:bg-neutral-800 bg-neutral-200 text-xs"
              key={i}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
