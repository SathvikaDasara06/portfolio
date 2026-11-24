"use client";

import React from "react";
import { achievementsList } from "@/data/achievements";
import { Award, Trophy, Sparkles, GraduationCap, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AchievementsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hackathon":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "Fellowship":
        return <Award className="w-5 h-5 text-[#38bdf8]" />;
      case "Scholarship":
        return <Sparkles className="w-5 h-5 text-[#8b5cf6]" />;
      case "Leadership":
        return <Users className="w-5 h-5 text-[#2dd4bf]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Honors, Leadership & Service
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Beyond the Code
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            National fellowships, corporate scholarships, developer advocacy, and institutional representation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/15 dark:border-white/10 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors font-sans leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-slate-400">
                  {item.organization} · <span className="text-slate-300">{item.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified Record</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4bf]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
