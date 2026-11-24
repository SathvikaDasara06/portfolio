"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MonogramProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Monogram({ size = "md", className }: MonogramProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm font-semibold",
    lg: "w-14 h-14 text-base font-bold",
    xl: "w-20 h-20 text-xl font-bold",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl font-mono tracking-tight select-none",
        "bg-gradient-to-br from-[#38bdf8]/20 via-[#8b5cf6]/20 to-[#2dd4bf]/20",
        "border border-white/15 dark:border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.15)]",
        "transition-transform duration-300 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      <span className="bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#2dd4bf] bg-clip-text text-transparent font-extrabold tracking-wider">
        SD
      </span>
      {/* Subtle corner tech accent */}
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#38bdf8] rounded-bl-sm opacity-60" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#8b5cf6] rounded-tr-sm opacity-60" />
    </div>
  );
}
