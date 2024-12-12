import React from "react";
import SkillCard from "./skillcard";

export default function SkillsSection() {
  const skills = [
    { iconClass: "fa-brands fa-js fa-6x", skillName: "JavaScript" },
    { iconClass: "fa-brands fa-react fa-6x", skillName: "React" },
    { iconClass: "fa-brands fa-sass fa-6x", skillName: "SASS" },
    { iconClass: "fa-brands fa-git-alt fa-6x", skillName: "Git" },
    { iconClass: "fa-brands fa-figma fa-6x", skillName: "Figma" },
    { iconClass: "fa-brands fa-bootstrap fa-6x", skillName: "Bootstrap" },
    { iconClass: "fa-brands fa-html5 fa-6x", skillName: "HTML 5" },
    { iconClass: "fa-brands fa-css3-alt fa-6x", skillName: "CSS3" },
  ];

  return (
    <section
      id="Skills"
      className="h-screen pt-32 flex flex-col justify-center items-center  wow animate__animated animate__fadeInLeft"
    >
      <h3 className="text-center text-2xl sm:text-4xl pb-5">Skills</h3>
      <p className="text-center sm:text-2xl">
        Technologies that I'm really good at
      </p>
      <div className="container mx-auto flex items-center justify-center mt-10 wow animate__animated animate__fadeInLeft  wow ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
