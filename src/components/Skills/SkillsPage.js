import React from "react";
import Section from "../Common/Section";
import SkillsDescription from "./SkillsDescription";
import Details from "./Details";

import LeftSvg from "../../assets/svg/left-pattern.svg";
import SkillsMarquee from "./SkillsMarquee";

const SkillsPage = () => {
  return (
    <Section
      id="skills"
      title="expertise"
      subtitle="I am proficient in performing tasks related to all of the listed skills below."
      className="relative"
    >
      <img
        src={LeftSvg}
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />

      <div className="md:px-20 px-5 overflow-x-hidden max-w-[24rem] md:max-w-[50rem] lg:max-w-[75rem] xl:max-w-[80rem] 2xl:max-w-[100rem]">
        <SkillsMarquee />
      </div>

      <div className="md:mx-10 lg:px-20 2xl:px-40 px-5 grid grid-cols-1 md:grid-cols-2 md:space-x-5">
        <Details />

        <SkillsDescription />
      </div>
    </Section>
  );
};

export default SkillsPage;
