import React from "react";

 export default function SkillCard({ iconClass, skillName }) {
  return (
    <div className="flex flex-col justify-center items-center bg-black p-1 border-b border-green-900">
      <i className={`${iconClass} fa-3x text-green-900`}></i>
      <span className="text-white">{skillName}</span>
    </div>
  );
}
