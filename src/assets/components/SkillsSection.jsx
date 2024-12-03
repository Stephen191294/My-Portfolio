import React from "react";
import SkillCard from "./skillcard";

export default function SkillsSection() {
  const skills = [
    { iconClass: "fa-brands fa-js", skillName: "JavaScript" },
    { iconClass: "fa-brands fa-react", skillName: "React" },
    { iconClass: "fa-brands fa-sass", skillName: "SASS" },
    { iconClass: "fa-brands fa-git-alt", skillName: "Git" },
    { iconClass: "fa-brands fa-figma", skillName: "Figma" },
    { iconClass: "fa-brands fa-bootstrap", skillName: "Bootstrap" },
    { iconClass: "fa-brands fa-html5", skillName: "HTML 5" },
    { iconClass: "fa-brands fa-css3-alt", skillName: "CSS3" },
  ];

  return (
    <section>
      <h3 className="text-center text-2xl">Skills</h3>
      <p className="text-center">Technologies that I'm really good at</p>
      <div className="container mx-auto flex items-center justify-center mt-10 wow animate__animated animate__fadeInLeft">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
