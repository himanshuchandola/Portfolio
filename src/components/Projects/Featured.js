import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Featured = ({
  secondary,
  live,
  thumbnail,
  code,
  title,
  description,
  tech,
}) => {
  const __renderImage = () => {
    return (
      <div className="col-span-12 sm:col-span-7 relative ">
        <a href={`${live}`}>
          <div className="h-[350px] w-full relative rounded-xl overflow-hidden">
            <img
              src={thumbnail}
              layout="fill"
              className="w-full h-full transition-all object-cover duration-300 group-hover:scale-110 group-hover:rotate-3"
              alt="loading..."
            />

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-900/50 transition-all duration-300 cursor-pointer hover:opacity-0" />
          </div>
        </a>
      </div>
    );
  };

  const __renderContent = () => {
    return (
      <div
        className={`col-span-12 sm:col-span-5 text-right sm:absolute sm:left-[50%]  ${
          secondary && `!relative z-30 !left-0 !text-start sm:w-[120%]`
        }`}
      >
        <div>
          <p className="text-amber-500 dark:text-amber-500"> Highlight </p>
          <h1 className="text-3xl font-medium text-neutral-700 dark:text-neutral-300">
            {" "}
            {title}{" "}
          </h1>

          <div className="my-6 p-6 bg-gray-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 shadow-xl shadow-gray-400/50 dark:shadow-black/30 rounded-xl hidden sm:block">
            <p> {description && description} </p>
          </div>

          <div
            className={`flex text-[#7000ff] font-extrabold gap-x-4 justify-end flex-wrap ${
              secondary && "!justify-start ml-0"
            }
            `}
          >
            {tech.map((e, i) => (
              <span className="" key={i}>
                {e}
              </span>
            ))}
          </div>

          <div
            className={`flex justify-end mt-5 gap-3 dark:text-neutral-300 text-neutral-700 ${
              secondary && "!justify-start"
            }`}
          >
            {live && (
              <a
                href={`${live}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 p-2 rounded-md dark:bg-neutral-800 bg-neutral-300 transition-all duration-300 hover:scale-110 text-2xl border-black/10 shadow-md shadow-gray-400/50 dark:shadow-black/20"
              >
                <BiLinkAlt />
              </a>
            )}

            {code && (
              <a
                href={`${code}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 p-2 rounded-md dark:bg-neutral-800 bg-neutral-300 transition-all duration-300 hover:scale-90 text-2xl border-black/10 shadow-md shadow-gray-400/50 dark:shadow-black/20"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative grid grid-cols-12 items-center gap-3 group ">
      {secondary ? (
        <>
          {__renderContent()}
          {__renderImage()}
        </>
      ) : (
        <>
          {__renderImage()}
          {__renderContent()}
        </>
      )}
    </div>
  );
};

export default Featured;
