import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const HEADING_FONT = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY_FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/yashk20030615",
    label: "GitHub",
    hoverColor: "#ffffff",
    hoverGlow: "rgba(255,255,255,0.15)",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/yash-kumar-gandhir/",
    label: "LinkedIn",
    hoverColor: "#0a66c2",
    hoverGlow: "rgba(10,102,194,0.2)",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/yashkumarg15/",
    label: "Instagram",
    hoverColor: "#e1306c",
    hoverGlow: "rgba(225,48,108,0.2)",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/yashkumar.gandhir.9",
    label: "Facebook",
    hoverColor: "#38bdf8",
    hoverGlow: "rgba(56,189,248,0.2)",
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const SocialIcon = ({ icon: Icon, href, label, hoverColor, hoverGlow }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -5, scale: 1.12 }}
    whileTap={{ scale: 0.93 }}
    style={{ textDecoration: "none" }}
  >
    <motion.div
      whileHover={{
        color: hoverColor,
        background: hoverGlow,
        borderColor: hoverColor,
        boxShadow: `0 0 18px ${hoverGlow}`,
      }}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "1px solid rgba(148,163,184,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#94a3b8",
        background: "rgba(255,255,255,0.03)",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
    >
      <Icon size={17} />
    </motion.div>
  </motion.a>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #020617 0%, #0a0f1e 100%)",
        borderTop: "1px solid rgba(56,189,248,0.12)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      {/* Glow accent top-center */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 120,
          background: "radial-gradient(ellipse, rgba(56,189,248,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "52px 24px 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
            marginBottom: "44px",
          }}
        >
          {/* Brand block */}
          <div style={{ maxWidth: 300 }}>
            <div
              style={{
                fontFamily: HEADING_FONT,
                fontSize: "1.5rem",
                fontWeight: 800,
                background: "linear-gradient(90deg, #38bdf8, #a855f7)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "10px",
              }}
            >
              Yash Kumar 🌟
            </div>
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "0.88rem",
                color: "#64748b",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              MERN Stack Developer building modern, scalable web applications with clean code and great user experience.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontFamily: HEADING_FONT,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#38bdf8",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  whileHover={{ x: 4, color: "#38bdf8" }}
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: "0.9rem",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    display: "inline-block",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Connect block */}
          <div>
            <p
              style={{
                fontFamily: HEADING_FONT,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#38bdf8",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "0.82rem",
                color: "#64748b",
                marginTop: "16px",
                lineHeight: 1.6,
              }}
            >
              Open to freelance &<br />full-time opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), rgba(168,85,247,0.2), transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: "0.82rem",
              color: "#475569",
              margin: 0,
            }}
          >
            © {year}{" "}
            <span style={{ color: "#38bdf8", fontWeight: 600 }}>
              Yash Kumar Gandhir
            </span>
            . All rights reserved.
          </p>

          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: "0.82rem",
              color: "#475569",
              margin: 0,
            }}
          >
            Built with{" "}
            <span style={{ color: "#38bdf8" }}>React</span>
            {" & "}
            <span style={{ color: "#a855f7" }}>Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;