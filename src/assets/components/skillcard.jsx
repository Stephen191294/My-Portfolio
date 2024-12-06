import React from "react";

export default function SkillCard({ iconClass, skillName }) {
  return (
    <div className="skill-card flex flex-col items-center text-green-900 bg-black border-b border-b-green-900 p-2 pb-2 cursor-pointer transition-transform duration-300 hover:animate-pulse">
      <i className={`${iconClass} text-4xl`} />
      <p className="text-center mt-2">{skillName}</p>
    </div>
  );
}
