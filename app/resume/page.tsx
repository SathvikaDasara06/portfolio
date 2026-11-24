import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { profileConfig } from "@/data/profile";
import { educationList } from "@/data/education";
import { experienceList } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { achievementsList } from "@/data/achievements";

export const metadata = {
  title: "Resume | Sathvika Dasara",
  description: "Curriculum Vitae of Sathvika Dasara: Data Analytics, AI & Software Engineering, and Research.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Top Navigation */}
      <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#38bdf8]" />
          <span>Back to Portfolio</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href={profileConfig.resume.url}
            download="Sathvika_Dasara_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-[#38bdf8]/15 hover:bg-[#38bdf8]/25 text-[#38bdf8] border border-[#38bdf8]/30 transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Resume Document Wrapper (Editorial Print-Quality View) */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 dark:border-white/10 space-y-10 text-slate-200">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              {profileConfig.displayName}
            </h1>
            <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider">
              {profileConfig.location}
            </span>
          </div>
          <p className="text-base text-slate-300 font-medium">
            {profileConfig.headline}
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
            <a href={profileConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              GitHub: github.com/SathvikaDasara06
            </a>
            <span>•</span>
            <a href={profileConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              LinkedIn: linkedin.com/in/sathvika-dasara
            </a>
            {profileConfig.social.email && (
              <>
                <span>•</span>
                <a href={`mailto:${profileConfig.social.email}`} className="hover:text-white underline">
                  {profileConfig.social.email}
                </a>
              </>
            )}
          </div>
        </div>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#38bdf8] font-bold border-b border-white/5 pb-1">
            Education
          </h2>
          <div className="space-y-6">
            {educationList.map((edu) => (
              <div key={edu.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-semibold text-white">{edu.institution}</span>
                  <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                </div>
                <div className="text-xs text-slate-300 italic">{edu.degree}</div>
                <div className="text-xs text-slate-400">
                  <span className="font-mono text-slate-400">Relevant Areas: </span>
                  {edu.relevantAreas.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#8b5cf6] font-bold border-b border-white/5 pb-1">
            Professional & Research Experience
          </h2>
          <div className="space-y-8">
            {experienceList.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-slate-400 font-normal">|</span>
                    <span className="text-slate-300">{exp.organization}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                {exp.advisor && (
                  <div className="text-xs font-mono text-slate-400">
                    Advisor: {exp.advisor} ({exp.department})
                  </div>
                )}
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 leading-relaxed">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <div className="text-xs font-mono text-slate-400 pt-1">
                  <span className="text-slate-400">Technologies: </span>
                  {exp.technologies.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#2dd4bf] font-bold border-b border-white/5 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="font-semibold text-slate-200">{cat.name}</div>
                <div className="text-slate-400 font-mono leading-relaxed">
                  {cat.skills.map((s) => s.name).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Achievements */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-widest text-[#38bdf8] font-bold border-b border-white/5 pb-1">
            Honors & Leadership
          </h2>
          <div className="space-y-3 text-xs">
            {achievementsList.map((ach) => (
              <div key={ach.id} className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">{ach.title}</span> — {ach.organization} ({ach.period})
                  <p className="text-slate-400 mt-0.5">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
