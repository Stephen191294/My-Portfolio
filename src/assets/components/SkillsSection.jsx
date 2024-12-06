import React from "react";
import SkillCard from "./skillcard";

export default function SkillsSection() {
  const skills = [
    { iconClass: "fa-brands fa-js fa-4x", skillName: "JavaScript" },
    { iconClass: "fa-brands fa-react fa-4x", skillName: "React" },
    { iconClass: "fa-brands fa-sass fa-4x", skillName: "SASS" },
    { iconClass: "fa-brands fa-git-alt fa-4x", skillName: "Git" },
    { iconClass: "fa-brands fa-figma fa-4x", skillName: "Figma" },
    { iconClass: "fa-brands fa-bootstrap fa-4x", skillName: "Bootstrap" },
    { iconClass: "fa-brands fa-html5 fa-4x", skillName: "HTML 5" },
    { iconClass: "fa-brands fa-css3-alt fa-4x", skillName: "CSS3" },
    { iconClass: "fab fa-css3 fa-4x", skillName: "Tailwind" },

    
  ];

  return (
    <section id="Skills" className="h-screen pt-32 flex flex-col justify-center items-center">
      <h3 className="text-center text-2xl sm:text-4xl pb-5">Skills</h3>
      <p className="text-center sm:text-2xl">Technologies that I'm really good at</p>
      <div className="container mx-auto flex items-center justify-center mt-10 wow animate__animated animate__fadeInLeft  wow ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
