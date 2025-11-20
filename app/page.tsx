"use client";

import Hero from "@/components/Hero";
import SkillsPreview from "@/components/SkillsPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import ExperiencePreview from "@/components/ExperiencePreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <SkillsPreview />
      <ProjectsPreview />
      <ExperiencePreview />
      <Contact />
    </div>
  );
}
