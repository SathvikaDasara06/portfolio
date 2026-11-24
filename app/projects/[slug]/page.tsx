import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsList, ProjectItem } from "@/data/projects";
import { ProjectArchitectureDiagram } from "@/components/projects/ProjectArchitectureDiagram";
import { RetailPulsePreview } from "@/components/projects/RetailPulsePreview";
import { EdnaBiodiversityPreview } from "@/components/projects/EdnaBiodiversityPreview";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Layers,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  FolderGit2,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study | Sathvika Dasara`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back to Projects Breadcrumb */}
      <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#38bdf8]" />
          <span>Back to Projects Showcase</span>
        </Link>
        <span className="text-xs font-mono text-slate-400">
          CASE STUDY :: {project.category.toUpperCase()}
        </span>
      </div>

      {/* Case Study Hero Header */}
      <div className="space-y-6 pb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 font-semibold">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
            {project.status}
          </span>
          {project.organization && (
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
              {project.organization}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
          {project.fullTitle || project.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl">
          {project.shortDescription}
        </p>

        {/* Verified Links & Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-white/5 text-slate-400 border border-white/10">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Internal / Institutional Research Archive</span>
            </div>
          )}

          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium bg-[#38bdf8]/15 hover:bg-[#38bdf8]/25 text-[#38bdf8] border border-[#38bdf8]/30 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

        {/* Disclaimers if any */}
        {project.disclaimer && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{project.disclaimer}</span>
          </div>
        )}
      </div>

      {/* Verified Metrics Grid */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-white/15">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                {m.value}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Case Study Body Sections */}
      <div className="space-y-12">
        {/* Project Overview */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
            01. Project Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {project.overview}
          </p>
        </section>

        {/* Problem Statement */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-[#8b5cf6] font-semibold">
            02. The Problem Statement
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {project.problemStatement}
          </p>
        </section>

        {/* Core Objectives */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-[#2dd4bf] font-semibold">
            03. Core Objectives & Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Approach & Architecture */}
        <section className="space-y-6">
          <div className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
            <h2 className="text-lg font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
              04. Technical Approach & Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {project.technicalApproach}
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
              <span className="text-[#38bdf8] font-semibold">Pipeline: </span>
              {project.architectureDescription}
            </div>
          </div>

          {/* Sequential Nodes Diagram */}
          {project.architectureNodes && (
            <ProjectArchitectureDiagram nodes={project.architectureNodes} />
          )}

          {/* Special Visual Interactive Previews */}
          {project.id === "retailpulse" && <RetailPulsePreview />}
          {project.id === "edna-biodiversity" && <EdnaBiodiversityPreview />}
        </section>

        {/* Technology Stack Detailed */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-slate-300 font-semibold">
            05. Technology Stack & Dependencies
          </h2>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/10 text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Implementation Highlights */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-[#8b5cf6] font-semibold">
            06. Implementation Details
          </h2>
          <div className="space-y-2.5">
            {project.implementationDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="text-[#8b5cf6] font-mono mt-0.5">•</span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Key Learnings */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-amber-400 font-semibold">
            07. Engineering Challenges & Learnings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.challengesAndLearnings.map((ch, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-slate-200">Insight #{idx + 1}</div>
                <p className="text-slate-400">{ch}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Roadmap & Improvements */}
        <section className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 space-y-4">
          <h2 className="text-lg font-mono uppercase tracking-widest text-[#2dd4bf] font-semibold">
            08. Future Roadmap & Architecture Evolutions
          </h2>
          <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-300">
            {project.futureImprovements.map((fut, idx) => (
              <li key={idx}>{fut}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-16 border-t border-white/10 mt-16 flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#38bdf8]" />
          <span>Back to All Projects</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10"
        >
          <span>Discuss This Project</span>
        </Link>
      </div>
    </main>
  );
}
