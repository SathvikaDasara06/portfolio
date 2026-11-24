"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Search } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { profileConfig } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState("home");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  // Active section observer on home page
  React.useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8",
          isScrolled ? "pt-2" : "pt-4"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Main Navigation"
            className={cn(
              "glass-nav rounded-2xl px-4 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300",
              "shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10 dark:border-white/10"
            )}
          >
            {/* Brand Logo & Monogram */}
            <Link
              href="/#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]/50 rounded-xl"
              aria-label="Sathvika Dasara — Home"
            >
              <Monogram size="sm" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-[#38bdf8] transition-colors">
                  {profileConfig.displayName}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider hidden sm:inline-block">
                  DATA · AI · RESEARCH
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = pathname === "/" && activeSection === sectionId;
                const linkHref = pathname === "/" ? link.href : `/${link.href}`;

                return (
                  <Link
                    key={link.name}
                    href={linkHref}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions: Command Palette, Theme Toggle, Resume */}
            <div className="flex items-center gap-2">
              {/* Command Palette Trigger */}
              <button
                onClick={() => setPaletteOpen(true)}
                className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]/50"
                aria-label="Open Command Palette"
                title="Search (Ctrl+K or ⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="text-[11px] text-slate-400">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-slate-300 font-mono border border-white/10">
                  ⌘K
                </kbd>
              </button>

              <ThemeToggle />

              {/* Resume Button */}
              <a
                href={profileConfig.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-100 bg-gradient-to-r from-[#38bdf8]/20 via-[#8b5cf6]/20 to-[#2dd4bf]/20 hover:from-[#38bdf8]/30 hover:to-[#8b5cf6]/30 border border-white/15 dark:border-white/10 transition-all duration-200 hover:scale-[1.02] shadow-[0_0_15px_rgba(56,189,248,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]/50"
              >
                <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Resume</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]/50"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto animate-in slide-in-from-top-4 duration-200">
            <div className="glass-panel rounded-2xl p-4 border border-white/15 space-y-2 bg-[#070b14]/95">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex items-center gap-2 text-xs font-mono text-slate-300 py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[#38bdf8]" />
                    Quick Search & Navigation
                  </span>
                  <kbd className="px-1 py-0.5 text-[10px] bg-white/10 rounded">⌘K</kbd>
                </button>
              </div>

              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = pathname === "/" && activeSection === sectionId;
                const linkHref = pathname === "/" ? link.href : `/${link.href}`;

                return (
                  <Link
                    key={link.name}
                    href={linkHref}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "block px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white/10 text-[#38bdf8] font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">CV / Resume</span>
                <a
                  href={profileConfig.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10"
                >
                  <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
