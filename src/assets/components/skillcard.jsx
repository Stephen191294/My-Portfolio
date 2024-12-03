import React from "react";

export default function SkillCard({ iconClass, skillName }) {
  return (
    <div className="skill-card flex flex-col items-center text-green-900 bg-black border-b border-b-green-900 pt-2">
      <i className={`${iconClass} text-4xl`} />
      <p className="text-center mt-2">{skillName}</p>
    </div>
  );
}
