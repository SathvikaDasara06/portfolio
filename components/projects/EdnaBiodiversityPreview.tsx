"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { taxon: "Proteobacteria", count: 3420, depth: "0-200m", color: "#38bdf8" },
  { taxon: "Cyanobacteria", count: 2150, depth: "0-200m", color: "#2dd4bf" },
  { taxon: "Bacteroidetes", count: 1840, depth: "200-1000m", color: "#8b5cf6" },
  { taxon: "Actinobacteria", count: 1290, depth: "1000-2000m", color: "#ec4899" },
  { taxon: "Firmicutes", count: 980, depth: "2000m+", color: "#f59e0b" },
  { taxon: "Thaumarchaeota", count: 870, depth: "2000m+", color: "#6366f1" },
];

export function EdnaBiodiversityPreview() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 dark:border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
        <h4 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
          Taxonomic Abundance & Diversity Indices (SIH 2025 Model)
        </h4>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-[#38bdf8]">Shannon H&apos;: 2.84</span>
          <span className="text-slate-500">|</span>
          <span className="text-[#2dd4bf]">Simpson 1-D: 0.89</span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
            <XAxis type="number" stroke="#64748b" tick={{ fontSize: 11, fontFamily: "monospace" }} />
            <YAxis
              dataKey="taxon"
              type="category"
              stroke="#94a3b8"
              tick={{ fontSize: 11, fontFamily: "monospace" }}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#070b14",
                borderColor: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
              formatter={(value: any) => [`${value} reads`, "Abundance"]}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5">
        <span>K-mer length: k=7 normalized vectors</span>
        <span>Depth gradient: Epipelagic to Bathypelagic</span>
      </div>
    </div>
  );
}
