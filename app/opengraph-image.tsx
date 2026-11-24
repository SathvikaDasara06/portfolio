import { ImageResponse } from "next/og";
import { profileConfig } from "@/data/profile";

export const alt = "Sathvika Dasara | Data Analytics, AI & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070b14",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#f1f5f9",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              backgroundColor: "rgba(56, 189, 248, 0.2)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#38bdf8",
            }}
          >
            SD
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold", color: "#f8fafc" }}>
              {profileConfig.displayName}
            </span>
            <span style={{ fontSize: "14px", color: "#38bdf8", letterSpacing: "2px" }}>
              NIT DURGAPUR · IIT MADRAS · IIT BOMBAY RESEARCH
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "52px",
              fontWeight: "900",
              lineHeight: 1.15,
              background: "linear-gradient(135deg, #ffffff 40%, #94a3b8 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Turning complex data into intelligent solutions.
          </div>
          <div style={{ fontSize: "22px", color: "#94a3b8" }}>
            Data Analytics | AI & Software Engineering | Computational Research
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#64748b",
          }}
        >
          <span>github.com/SathvikaDasara06</span>
          <span style={{ color: "#38bdf8" }}>81,000+ Articles · SIH 2025 Finalist</span>
          <span>sathvikadasara.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
