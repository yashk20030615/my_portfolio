import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HEADING_FONT = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY_FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const TECH_BADGES = ["HTML", "CSS", "Javascript", "React.js", "Node.js", "MongoDB", "Express"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "calc(100vh - 70px)",
        // marginTop: "70px",
        background: "linear-gradient(160deg, #020617 0%, #0d1224 60%, #0a0720 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        color: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .hero-avatar { animation: float 4s ease-in-out infinite; }
        .ring-outer { animation: spin-slow 10s linear infinite; }
        .glow-pulse { animation: pulse-glow 3s ease-in-out infinite; }
        .badge-chip {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.22);
          color: #7dd3fc;
          white-space: nowrap;
        }
      `}</style>

      {/* ── Background glows ── */}
      <div style={{
        position: "absolute", top: "-180px", left: "-120px",
        width: 520, height: 520,
        background: "radial-gradient(circle, rgba(56,189,248,0.18), transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-160px", right: "-100px",
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(168,85,247,0.18), transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* ── Grid dot texture ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(148,163,184,0.06) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      {/* ── Main content ── */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        maxWidth: "1100px",
        width: "100%",
      }}>

        {/* LEFT — text */}
        <div style={{ flex: "1 1 440px", maxWidth: 540 }}>

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(56,189,248,0.08)",
            border: "1px solid rgba(56,189,248,0.22)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "22px",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#38bdf8",
              boxShadow: "0 0 8px #38bdf8",
              display: "inline-block",
            }} className="glow-pulse" />
            <span style={{
              fontFamily: BODY_FONT, fontSize: "0.8rem",
              fontWeight: 600, color: "#7dd3fc", letterSpacing: "0.05em",
            }}>
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: HEADING_FONT,
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: "8px",
          }}>
            Hi, I'm{" "}
            <span style={{
              background: "linear-gradient(90deg,#38bdf8,#a855f7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Yash Kumar
            </span>
          </motion.h1>

          <motion.h2 {...fadeUp(0.18)} style={{
            fontFamily: HEADING_FONT,
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 700,
            color: "#475569",
            marginBottom: "22px",
            letterSpacing: "-0.01em",
          }}>
            MERN Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p {...fadeUp(0.26)} style={{
            fontFamily: BODY_FONT,
            color: "#94a3b8",
            lineHeight: 1.8,
            fontSize: "1rem",
            marginBottom: "32px",
          }}>
            I design and develop modern, scalable web applications using the MERN
            stack — focused on clean architecture, performance optimization, and
            beautiful UI/UX that users actually enjoy.
          </motion.p>

          {/* Tech badges */}
          <motion.div {...fadeUp(0.32)} style={{
            display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "38px",
          }}>
            {TECH_BADGES.map((tech) => (
              <span key={tech} className="badge-chip">{tech}</span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(56,189,248,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/projects")}
              style={{
                fontFamily: BODY_FONT,
                padding: "13px 32px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #38bdf8, #a855f7)",
                border: "none",
                color: "#020617",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              View Projects →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#38bdf8", color: "#38bdf8" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              style={{
                fontFamily: BODY_FONT,
                padding: "13px 32px",
                borderRadius: "999px",
                background: "transparent",
                border: "1.5px solid rgba(148,163,184,0.3)",
                color: "#94a3b8",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT — avatar graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flex: "0 0 auto", position: "relative", width: 260, height: 260 }}
        >
          {/* Spinning outer ring */}
          <svg
            className="ring-outer"
            style={{ position: "absolute", inset: -22, width: "calc(100% + 44px)", height: "calc(100% + 44px)" }}
            viewBox="0 0 304 304"
          >
            <circle cx="152" cy="152" r="148" fill="none"
              stroke="url(#ringGrad)" strokeWidth="1.5"
              strokeDasharray="12 18" strokeLinecap="round" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Avatar circle */}
          <div
            className="hero-avatar"
            style={{
              width: 260, height: 260,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(168,85,247,0.12))",
              border: "2px solid rgba(56,189,248,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "7rem",
              boxShadow: "0 0 60px rgba(56,189,248,0.12), 0 0 100px rgba(168,85,247,0.08)",
            }}
          >
            👨‍💻
          </div>

          {/* Floating badge — top right */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              position: "absolute", top: 8, right: -36,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(56,189,248,0.25)",
              borderRadius: "12px",
              padding: "8px 14px",
              backdropFilter: "blur(12px)",
              whiteSpace: "nowrap",
            }}
          >
            <p style={{ fontFamily: BODY_FONT, fontSize: "0.7rem", color: "#64748b", margin: 0 }}>Experience</p>
            <p style={{ fontFamily: HEADING_FONT, fontSize: "1rem", fontWeight: 700, color: "#38bdf8", margin: 0 }}>Fresher</p>
          </motion.div>

          {/* Floating badge — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            style={{
              position: "absolute", bottom: 16, left: -42,
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(168,85,247,0.25)",
              borderRadius: "12px",
              padding: "8px 14px",
              backdropFilter: "blur(12px)",
              whiteSpace: "nowrap",
            }}
          >
            <p style={{ fontFamily: BODY_FONT, fontSize: "0.7rem", color: "#64748b", margin: 0 }}>Projects</p>
            <p style={{ fontFamily: HEADING_FONT, fontSize: "1rem", fontWeight: 700, color: "#a855f7", margin: 0 }}>8+ Built</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;