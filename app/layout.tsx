import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileConfig } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
};

export const metadata: Metadata = {
  title: "Sathvika Dasara | Data Analytics, AI & Software Engineering",
  description:
    "Explore Sathvika Dasara's portfolio featuring data analytics, database development, artificial intelligence, software engineering, and interdisciplinary research at IIT Bombay, NIT Durgapur, and IIT Madras.",
  keywords: [
    "Sathvika Dasara",
    "Dasara Thanmai Sri Sathvika",
    "Data Analytics",
    "Data Science",
    "IIT Madras",
    "NIT Durgapur",
    "IIT Bombay Research Intern",
    "Database Systems",
    "Artificial Intelligence",
    "Software Engineering",
    "Bioinformatics",
    "Smart India Hackathon 2025",
  ],
  authors: [{ name: "Sathvika Dasara", url: "https://github.com/SathvikaDasara06" }],
  creator: "Sathvika Dasara",
  publisher: "Sathvika Dasara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sathvikadasara.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Sathvika Dasara | Data Analytics, AI & Software Engineering",
    description:
      "Turning complex data into intelligent solutions. Data analytics, database systems, AI development, and research at IIT Bombay, NIT Durgapur, and IIT Madras.",
    url: "https://sathvikadasara.vercel.app",
    siteName: "Sathvika Dasara Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathvika Dasara | Data Analytics, AI & Software Engineering",
    description:
      "Turning complex data into intelligent solutions. Data analytics, database systems, AI development, and research.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileConfig.fullName,
    alternateName: profileConfig.displayName,
    jobTitle: "Data Analytics, AI & Software Engineering Researcher",
    description: profileConfig.supportingIntro,
    url: "https://sathvikadasara.vercel.app",
    sameAs: [
      profileConfig.social.github,
      profileConfig.social.linkedin,
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Technology Durgapur",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Madras",
      },
    ],
    knowsAbout: [
      "Data Analytics",
      "Relational Databases",
      "PostgreSQL",
      "Python",
      "Machine Learning",
      "Biomedical Research Computing",
      "Environmental DNA Classification",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased flex flex-col font-sans selection:bg-[#38bdf8]/30 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
