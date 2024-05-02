import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";

export const projectsData = [
  {
    id: 1,
    thumbnail: "https://i.imgur.com/UEqATGm.jpeg",
    title: "E-Paper Amar Ujala ",
    description: "Amar Ujala Hindi E-Newspaper with all available cities.",
    live: "https://epaper-amar-ujala-hindi.netlify.app/",
    code: "https://github.com/himanshuchandola/Amar-Ujala-E-Paper",
    tech: ["React.js"],
    featured: false,
  },
  {
    id: 2,
    thumbnail: "https://i.imgur.com/GzAhqVA.png",
    title: "Track My Expenses ",
    description:
      "Track My Expenses is a web app that helps to manage your personal Expenses with beautiful utilities like charts and calculative paying of dues.",
    live: "https://track-my-expenses-4th-sem-project-gehu.netlify.app/",
    code: "https://github.com/himanshuchandola/Track-My-Expenses",
    tech: ["React.js"],
    featured: false,
  },
  {
    id: 3,
    thumbnail:
      "https://raw.githubusercontent.com/himanshuchandola/E-Voting-Web-System/main/readme%20images/image-007.jpg",
    title: "Matdaan - E-Voting System ",
    description:
      "A Interactive Way To Solve Conventional Voting via E-Voting. ",
    live: "https://github.com/himanshuchandola/E-Voting-Web-System",
    code: "https://github.com/himanshuchandola/E-Voting-Web-System",
    tech: ["HTMl5, PHP, CSS3, Bootstrap, MySQL"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      <span>
        For More Projects and Other work visit my{" "}
        <a
          href="https://github.com/himanshuchandola?tab=repositories&q=&type=source&language=&sort="
          style={{ fontWeight: "bold", color: "red" }}
        >
          GitHub
        </a>
      </span>
    </Section>
  );
};

export default Projects;
