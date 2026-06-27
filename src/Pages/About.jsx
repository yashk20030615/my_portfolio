import { motion } from "framer-motion";
import yashimg from "../assets/yash.jpg";
import school from "../assets/school.png";
import college from "../assets/college.jpg";
import master from "../assets/maimt.jpg";

const HEADING_FONT = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY_FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

// ── Personal info rows ──────────────────────────────────
const INFO_ROWS = [
  { label: "Full Name",      value: "Yash Kumar Gandhir" },
  { label: "Father's Name",  value: "Sanjeev" },
  { label: "Mother's Name",  value: "Rajni" },
  { label: "Date of Birth",  value: "15 June 2003" },
  { label: "City",           value: "Panipat" },
  { label: "State",          value: "Haryana" },
  { label: "Country",        value: "India" },
];

// ── Education data ──────────────────────────────────────
const EDU_DATA = [
  {
    title: "Schooling",
    school: "St Mary's Convent Sr. Sec. School, Panipat",
    board: "CBSE",
    duration: "LKG – 12th",
    image: school,
    chips: ["10th · March 2019 · 70%", "12th · March 2021 · 91%", "Commerce + Info Practices"],
    accent: "#38bdf8",
  },
  {
    title: "Bachelor's Degree",
    school: "University of Delhi",
    board: "B.Com",
    duration: "Aug 2021 – July 2024",
    image: college,
    chips: ["CGPA: 6.5", "First Division"],
    accent: "#a855f7",
  },
  {
    title: "Master's Degree",
    school: "Maharaja Agrasen Institute of Management & Technology, Jagadhri",
    board: "MCA · Kurukshetra University",
    duration: "Aug 2024 – June 2026",
    image: master,
    chips: ["CGPA: 8.0 (Sem 1–2)", "Current"],
    accent: "#34d399",
  },
];

// ── Age helper ───────────────────────────────────────────
const getAge = () => {
  const dob = new Date("2003-06-15");
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) age--;
  return age;
};

// ── Sub-components ───────────────────────────────────────
const SectionLabel = ({ text }) => (
  <div style={{
    fontFamily: BODY_FONT,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: "10px",
  }}>
    {text}
  </div>
);

const SectionHeading = ({ children }) => (
  <h2 style={{
    fontFamily: HEADING_FONT,
    fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    color: "#f8fafc",
    textAlign: "center",
    marginBottom: "40px",
  }}>
    {children}
  </h2>
);

const Chip = ({ text, color }) => (
  <span style={{
    fontFamily: BODY_FONT,
    fontSize: "0.78rem",
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: "999px",
    background: `${color}18`,
    border: `1px solid ${color}44`,
    color: color,
    whiteSpace: "nowrap",
  }}>
    {text}
  </span>
);

// ── Education Card ───────────────────────────────────────
const EduCard = ({ title, school, board, duration, image, chips, accent }, index) => (
  <motion.div
    key={title}
    {...fadeUp(index * 0.1)}
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "32px",
      alignItems: "center",
      background: "#111827",
      border: `1px solid ${accent}22`,
      borderRadius: "20px",
      padding: "32px",
      boxShadow: `0 8px 32px rgba(0,0,0,0.35)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Accent glow corner */}
    <div style={{
      position: "absolute", top: -40, right: -40,
      width: 140, height: 140,
      background: `radial-gradient(circle, ${accent}22, transparent 70%)`,
      pointerEvents: "none",
    }} />

    {/* Text */}
    <div style={{ flex: "1 1 300px" }}>
      <div style={{
        fontFamily: BODY_FONT,
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: accent,
        marginBottom: "8px",
        textTransform: "uppercase",
      }}>
        {duration}
      </div>
      <h3 style={{
        fontFamily: HEADING_FONT,
        fontSize: "1.4rem",
        fontWeight: 700,
        color: "#f1f5f9",
        marginBottom: "6px",
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: BODY_FONT,
        fontSize: "0.92rem",
        color: "#64748b",
        marginBottom: "6px",
      }}>
        {school}
      </p>
      <p style={{
        fontFamily: BODY_FONT,
        fontSize: "0.85rem",
        color: "#475569",
        marginBottom: "18px",
      }}>
        {board}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {chips.map((c) => <Chip key={c} text={c} color={accent} />)}
      </div>
    </div>

    {/* Image */}
    <div style={{ flex: "0 1 200px", textAlign: "center" }}>
      <motion.img
        whileHover={{ scale: 1.04 }}
        src={image}
        alt={title}
        style={{
          width: "100%",
          maxWidth: "200px",
          borderRadius: "14px",
          border: `2px solid ${accent}55`,
          boxShadow: `0 8px 24px ${accent}33`,
        }}
      />
    </div>
  </motion.div>
);

// ── Main Component ───────────────────────────────────────
const About = () => {
  const age = getAge();

  return (
    <section style={{
      minHeight: "100vh",
      padding: "110px 24px 80px",
      background: "linear-gradient(160deg, #020617 0%, #0d1224 60%, #0a0720 100%)",
      color: "#f8fafc",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "64px" }}>

        {/* ── Personal Info ─────────────────────────── */}
        <div>
          <SectionLabel text="ABOUT ME" />
          <SectionHeading>Personal Information</SectionHeading>

          <motion.div
            {...fadeUp(0)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
              background: "#111827",
              border: "1px solid rgba(56,189,248,0.15)",
              borderRadius: "20px",
              padding: "36px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div style={{
              position: "absolute", top: -60, left: -60,
              width: 200, height: 200,
              background: "radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Info grid */}
            <div style={{ flex: "1 1 300px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "14px 24px",
              }}>
                {[...INFO_ROWS, { label: "Age", value: `${age} years` }].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{
                      fontFamily: BODY_FONT,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#38bdf8",
                      marginBottom: "2px",
                      textTransform: "uppercase",
                    }}>
                      {label}
                    </p>
                    <p style={{
                      fontFamily: BODY_FONT,
                      fontSize: "0.95rem",
                      color: "#e2e8f0",
                      fontWeight: 500,
                    }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div style={{ flex: "0 1 200px", textAlign: "center" }}>
              <motion.img
                whileHover={{ scale: 1.04 }}
                src={yashimg}
                alt="Yash Kumar Gandhir"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  borderRadius: "16px",
                  border: "2px solid rgba(56,189,248,0.5)",
                  boxShadow: "0 8px 32px rgba(56,189,248,0.25)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Education ─────────────────────────────── */}
        <div>
          <SectionLabel text="EDUCATION" />
          <SectionHeading>Academic Journey</SectionHeading>

          <motion.p
            {...fadeUp(0)}
            style={{
              fontFamily: BODY_FONT,
              textAlign: "center",
              color: "#64748b",
              maxWidth: "700px",
              margin: "-20px auto 36px",
              lineHeight: 1.8,
              fontSize: "0.95rem",
            }}
          >
            From a strong academic foundation in schooling to commerce and
            computer applications — each phase sharpened my analytical thinking
            and technical expertise.
          </motion.p>

          {/* Timeline line */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
            <div style={{
              position: "absolute",
              left: 28,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(180deg, #38bdf8, #a855f7, #34d399)",
              opacity: 0.2,
              borderRadius: 2,
            }} />
            {EDU_DATA.map((edu, i) => EduCard(edu, i))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;