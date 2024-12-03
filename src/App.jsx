
import React from "react";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";
import SkillsSection from "./assets/components/SkillsSection";
import ProjectsSection from "./assets/components/ProjectsSection";
import ContactSection from "./assets/components/ContactSection";
import NavBar from "./assets/components/navbar";
import "animate.css";

export default function Main() {
  return (
    <main className="h-70 pb-10">
      <NavBar/>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
