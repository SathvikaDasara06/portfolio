"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import {
  BarChart3,
  Database,
  BrainCircuit,
  Server,
  Dna,
  Layout,
  Wrench,
  Check,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-[#38bdf8]" />;
      case "Database":
        return <Database className="w-5 h-5 text-[#8b5cf6]" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-[#2dd4bf]" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Dna":
        return <Dna className="w-5 h-5 text-amber-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-sky-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-slate-400" />;
      default:
        return <Database className="w-5 h-5 text-[#38bdf8]" />;
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Capabilities & Tooling
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Technical Skills Matrix
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            <span className="text-white font-semibold">Priority specialization: </span>
            Data analytics, relational database design, Python workflows, and research computing.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8 pb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border",
              selectedCategory === "all"
                ? "bg-white text-slate-900 font-semibold border-white"
                : "bg-white/5 text-slate-400 hover:text-white border-white/10 hover:bg-white/10"
            )}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border flex items-center gap-2",
                selectedCategory === cat.id
                  ? "bg-white text-slate-900 font-semibold border-white"
                  : "bg-white/5 text-slate-400 hover:text-white border-white/10 hover:bg-white/10"
              )}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={cn(
                "glass-card rounded-3xl p-6 sm:p-7 border border-white/15 dark:border-white/10 flex flex-col justify-between group",
                category.priority <= 2 ? "lg:col-span-1 border-t-2 border-t-[#38bdf8]/40" : ""
              )}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-sans">
                        {category.name}
                      </h3>
                      {category.priority <= 2 && (
                        <span className="text-[10px] font-mono text-[#38bdf8] flex items-center gap-1 font-semibold">
                          <Star className="w-3 h-3 fill-[#38bdf8]" /> Primary Core Specialization
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-sans py-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges (No arbitrary percentage bars per prompt rules) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={cn(
                        "px-3 py-1.5 rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5",
                        skill.isPrimary
                          ? "bg-white/10 text-white font-semibold border border-[#38bdf8]/30 shadow-sm"
                          : "bg-white/5 text-slate-300 border border-white/5 hover:border-white/20"
                      )}
                    >
                      {skill.isPrimary && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Competency Footnote */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified in code repositories</span>
                <Check className="w-3.5 h-3.5 text-[#2dd4bf]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
