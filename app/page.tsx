import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBento } from "@/components/sections/StatsBento";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsBento } from "@/components/projects/ProjectsBento";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsBento />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsBento />
      <ResearchSection />
      <SkillsSection />
      <AchievementsSection />
      <GitHubSection />
      <ContactSection />
    </div>
  );
}
