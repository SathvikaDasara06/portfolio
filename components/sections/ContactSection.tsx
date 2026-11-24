"use client";

import React, { useState } from "react";
import { profileConfig } from "@/data/profile";
import { Mail, FileText, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (data.notConfigured) {
        // Transparent notice per guidelines
        setStatus("unconfigured");
        setStatusMessage(data.message);
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to deliver message. Please check input.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error occurred. Please try reaching out directly via LinkedIn or email.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Links & Brand Pitch (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold">
                Initiate Collaboration
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
                Let&apos;s build something meaningful.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              I&apos;m interested in opportunities involving data analytics, artificial intelligence,
              database development, software engineering, and interdisciplinary research.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-4">
              <a
                href={profileConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 group hover:border-[#38bdf8]/40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#38bdf8]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">LinkedIn Connection</div>
                    <div className="text-[11px] font-mono text-slate-400">linkedin.com/in/sathvika-dasara</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#38bdf8] group-hover:underline">Connect →</span>
              </a>

              <a
                href={profileConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 group hover:border-[#8b5cf6]/40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#8b5cf6]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">GitHub Repositories</div>
                    <div className="text-[11px] font-mono text-slate-400">github.com/SathvikaDasara06</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#8b5cf6] group-hover:underline">Follow →</span>
              </a>

              {profileConfig.social.email && (
                <a
                  href={`mailto:${profileConfig.social.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 group hover:border-[#2dd4bf]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#2dd4bf]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Direct Email</div>
                      <div className="text-[11px] font-mono text-slate-400">{profileConfig.social.email}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#2dd4bf] group-hover:underline">Write →</span>
                </a>
              )}

              <a
                href={profileConfig.resume.url}
                download="Sathvika_Dasara_Resume.pdf"
                className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 group hover:border-amber-400/40"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-amber-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Curriculum Vitae</div>
                    <div className="text-[11px] font-mono text-slate-400">PDF Document (Verified Credentials)</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-400 group-hover:underline">Download →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 dark:border-white/10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  INQUIRY TRANSMISSION FORM
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ACTIVE ENDPOINT
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-300">
                      Full Name <span className="text-[#38bdf8]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-300">
                      Email Address <span className="text-[#38bdf8]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                    Subject Line <span className="text-[#38bdf8]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Research Opportunity / Data Engineering Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300">
                    Message Body <span className="text-[#38bdf8]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, research scope, or technical role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "loading" && (
                  <div className="p-3 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying and dispatching message payload...</span>
                  </div>
                )}

                {status === "success" && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "unconfigured" && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 space-y-1">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4" />
                      <span>Notice: Direct Dispatch Preferred</span>
                    </div>
                    <p>{statusMessage}</p>
                    <div className="pt-1">
                      <a
                        href={`mailto:${profileConfig.social.email}?subject=${encodeURIComponent(formData.subject || "Collaboration")}&body=${encodeURIComponent(formData.message || "")}`}
                        className="underline text-white font-bold"
                      >
                        Click to open in your mail client →
                      </a>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-xs font-mono text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
