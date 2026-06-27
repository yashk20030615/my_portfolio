import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import cLogo from "../assets/C.jpg";
// import javaLogo from "../assets/java.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import expressLogo from "../assets/express.png";
import mongoLogo from "../assets/mongo.png";
import gitLogo from "../assets/git.jpg";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";

// One accent color per category — reused for the group dot, card dot, gauge ring and hover glow.
const CATEGORY_META = {
  Languages: "#f5b441",
  Frontend: "#38bdf8",
  Backend: "#34d399",
  Database: "#a855f7",
  Tools: "#f472b6",
};
const CATEGORY_ORDER = ["Languages", "Frontend", "Backend", "Database", "Tools"];

const HEADING_FONT = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY_FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const skills = [
  { name: "C Programming", level: 95, logo: cLogo, category: "Languages" },
  { name: "JavaScript", level: 90, logo: jsLogo, category: "Languages" },
  { name: "Python", level: 20, logo: python, category: "Languages" },
  { name: "HTML", level: 90, logo: htmlLogo, category: "Frontend" },
  { name: "CSS", level: 85, logo: cssLogo, category: "Frontend" },
  { name: "React.js", level: 75, logo: reactLogo, category: "Frontend" },
  { name: "Node.js", level: 75, logo: nodeLogo, category: "Backend" },
  { name: "Express.js", level: 75, logo: expressLogo, category: "Backend" },
  { name: "MongoDB", level: 70, logo: mongoLogo, category: "Database" },
  { name: "MySQL", level: 70, logo: mysql, category: "Database" },
  { name: "Git & GitHub", level: 75, logo: gitLogo, category: "Tools" },
];

// Counts up from 0 -> value the first time it scrolls into view.
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      viewport={{ once: true, margin: "-30px" }}
      onViewportEnter={() => {
        const duration = 900;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.round(progress * value));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

// Small radial proficiency ring.
const Gauge = ({ level, color, delay = 0 }) => {
  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * level) / 100;

  return (
    <div style={{ position: "relative", width: 56, height: 56, flexShrink: 0 }}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={radius} stroke="#1e293b" strokeWidth="5" fill="none" />
        <motion.circle
          cx="28"
          cy="28"
          r={radius}
          stroke={color}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay }}
          transform="rotate(-90 28 28)"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: BODY_FONT,
          fontSize: "0.74rem",
          fontWeight: 700,
          color: "#e2e8f0",
        }}
      >
        <AnimatedCounter value={level} suffix="%" />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const reduceMotion = useReducedMotion();

  const grouped = useMemo(
    () =>
      CATEGORY_ORDER.map((cat) => ({
        category: cat,
        items: skills.filter(
          (s) => s.category === cat && (activeCategory === "All" || activeCategory === cat)
        ),
      })).filter((g) => g.items.length > 0),
    [activeCategory]
  );

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 24px 70px",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "#f8fafc",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ maxWidth: "1000px", width: "100%" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: BODY_FONT,
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          SKILLS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: HEADING_FONT,
            fontSize: "2.5rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: "14px",
            color: "#f8fafc",
          }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: BODY_FONT,
            textAlign: "center",
            color: "#cbd5f5",
            maxWidth: "650px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          My core technical skill set has been developed through a strong academic
          foundation, hands-on project experience, and a commitment to continuous
          learning, enabling me to build efficient, scalable, and user-focused
          applications.
        </motion.p>

        {/* Filter pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {["All", ...CATEGORY_ORDER].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                type="button"
                whileHover={reduceMotion ? {} : { scale: 1.05 }}
                whileTap={reduceMotion ? {} : { scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: BODY_FONT,
                  padding: "9px 18px",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  border: isActive ? "none" : "1px solid rgba(148,163,184,0.25)",
                  background: isActive
                    ? "linear-gradient(90deg, #38bdf8, #a855f7)"
                    : "transparent",
                  color: isActive ? "#0b1120" : "#cbd5f5",
                  cursor: "pointer",
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Grouped skill grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {grouped.map((group) => (
              <div key={group.category} style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: CATEGORY_META[group.category],
                    }}
                  />
                  <span style={{ fontFamily: HEADING_FONT, fontSize: "0.95rem", fontWeight: 700, color: "#f1f5f9" }}>
                    {group.category}
                  </span>
                  <span style={{ fontFamily: BODY_FONT, fontSize: "0.78rem", color: "#64748b" }}>
                    {group.items.length} skills
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "18px",
                  }}
                >
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              y: -4,
                              borderColor: CATEGORY_META[group.category],
                              boxShadow: `0 14px 30px -12px ${CATEGORY_META[group.category]}`,
                            }
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        background: "#111827",
                        border: "1px solid rgba(148,163,184,0.12)",
                        borderRadius: "16px",
                        padding: "18px 20px",
                      }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        style={{ width: 34, height: 34, objectFit: "contain", borderRadius: 8 }}
                      />
                      <div
                        style={{
                          flex: 1,
                          minWidth: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: CATEGORY_META[group.category],
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: BODY_FONT,
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            color: "#e2e8f0",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <Gauge level={skill.level} color={CATEGORY_META[group.category]} delay={i * 0.05} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;