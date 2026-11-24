"use client";

import React from "react";
import { DollarSign, ShoppingBag, Users, TrendingUp, AlertTriangle } from "lucide-react";

export function RetailPulsePreview() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 dark:border-white/10 space-y-6">
      {/* Concept Badge Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
            RetailPulse BI Interface Preview (Concept Design)
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
          <AlertTriangle className="w-3 h-3 shrink-0" />
          <span>Planned Architecture Concept — Not Deployed</span>
        </div>
      </div>

      {/* Conceptual KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Net Revenue</span>
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-bold font-mono text-white">\$1.42M</div>
          <div className="text-[10px] text-emerald-400 font-mono">+14.2% YoY</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Orders Modeled</span>
            <ShoppingBag className="w-3.5 h-3.5 text-[#38bdf8]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">48,250</div>
          <div className="text-[10px] text-slate-400 font-mono">Normalized Star Schema</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Avg Order Value</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#8b5cf6]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">\$78.40</div>
          <div className="text-[10px] text-slate-400 font-mono">Dynamic Cohorts</div>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Repeat Buyer Ratio</span>
            <Users className="w-3.5 h-3.5 text-[#2dd4bf]" />
          </div>
          <div className="text-xl font-bold font-mono text-white">32.6%</div>
          <div className="text-[10px] text-slate-400 font-mono">RFM Quartile Analysis</div>
        </div>
      </div>

      {/* Cohort Heatmap Concept Visual */}
      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
        <div className="text-xs font-mono text-slate-300 font-semibold flex items-center justify-between">
          <span>Customer Retention Cohort Grid (Conceptual Matrix)</span>
          <span className="text-[10px] font-mono text-slate-400">Streamlit / Plotly Layout</span>
        </div>
        <div className="grid grid-cols-6 gap-2 text-center text-xs font-mono">
          <div className="p-2 rounded-lg bg-[#38bdf8]/40 text-white font-bold">M0: 100%</div>
          <div className="p-2 rounded-lg bg-[#38bdf8]/30 text-white font-bold">M1: 42%</div>
          <div className="p-2 rounded-lg bg-[#38bdf8]/20 text-white">M2: 34%</div>
          <div className="p-2 rounded-lg bg-[#38bdf8]/15 text-white">M3: 28%</div>
          <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-white">M4: 25%</div>
          <div className="p-2 rounded-lg bg-[#38bdf8]/5 text-slate-400">M5: 22%</div>
        </div>
        <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
          Aggregated by acquisition month using PostgreSQL window functions (DENSE_RANK, NTILE) to compute cohort decay and evaluate unit economics.
        </p>
      </div>
    </div>
  );
}
