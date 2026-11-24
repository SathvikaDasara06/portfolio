"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface StepNode {
  step: string;
  name: string;
  details: string;
}

interface PipelineDiagramProps {
  title?: string;
  nodes: StepNode[];
}

export function ProjectArchitectureDiagram({ title = "Data Flow & Architecture Pipeline", nodes }: PipelineDiagramProps) {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 dark:border-white/10 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <h4 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
          {title}
        </h4>
        <span className="text-[11px] font-mono text-slate-400">
          {nodes.length} SEQUENTIAL PHASES
        </span>
      </div>

      {/* Horizontal / Wrapped Step Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nodes.map((node, index) => (
          <div
            key={node.step}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-3 group hover:border-[#38bdf8]/40 transition-colors relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#38bdf8] font-bold px-2 py-0.5 rounded-md bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                STEP {node.step}
              </span>
              {index < nodes.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block group-hover:text-[#38bdf8] transition-colors" />
              )}
            </div>

            <div>
              <h5 className="text-sm font-bold text-white font-sans mb-1">
                {node.name}
              </h5>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {node.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
