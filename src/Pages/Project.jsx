import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import todojs from "../assets/TodoList--JS.png";
import todoreact from "../assets/TodoList---React.png";
import quickcart from "../assets/quickcart.png";
import loginsignup from "../assets/loginsignup.png";
import loginsignupmern from "../assets/loginsignupmern.png";
import counter from "../assets/counter.png";
import library from "../assets/Library_mgmt_system.png";
import clock from "../assets/Clock.png";

const HEADING_FONT = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY_FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const CATEGORY_ORDER = ["Frontend", "React", "Full-Stack"];

/* ================= Projects Data ================= */

const projects = [
  {
    title: "Login-Signup",
    category: "Frontend",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Responsive Login and Signup system with form validation, smooth UI interactions and clean front-end architecture.",
    image: loginsignup,
    liveLink: "https://yashk20030615.github.io/Login-Signup/",
    codeLink: "https://github.com/yashk20030615/Login-Signup.git",
  },
  {
    title: "To-Do List (JavaScript)",
    category: "Frontend",
    technologies: "HTML, CSS, JavaScript, DOM",
    description:
      "Interactive to-do list application focusing on DOM manipulation, event handling and task management.",
    image: todojs,
    liveLink: "https://yashk20030615.github.io/To-Do-List---Js/",
    codeLink: "https://github.com/yashk20030615/To-Do-List---Js.git",
  },
  {
    title: "Digital Clock",
    category: "Frontend",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Real-time digital clock displaying current time and date using JavaScript timing functions.",
    image: clock,
    liveLink: "https://yashk20030615.github.io/Clock/",
    codeLink: "https://github.com/yashk20030615/Clock.git",
  },
  {
    title: "To-Do List (React)",
    category: "React",
    technologies: "React, Vite",
    description:
      "React-based to-do list using component architecture, hooks and fast build setup with Vite.",
    image: todoreact,
    liveLink: "https://to-do-list-react-yash.netlify.app/",
    codeLink: "https://github.com/yashk20030615/To-Do-List-React.git",
  },
  {
    title: "Counter App",
    category: "React",
    technologies: "React, Vite",
    description:
      "Multi-operation counter app implementing React state management and real-time UI updates.",
    image: counter,
    liveLink: "https://counterapp-weld.vercel.app/",
    codeLink: "https://github.com/yashk20030615/Counterapp.git",
  },
  {
    title: "QuickCart",
    category: "React",
    technologies: "React, Redux Toolkit, Bootstrap",
    description:
      "E-commerce app with product listing, cart management and dynamic price updates using Redux Toolkit.",
    image: quickcart,
    liveLink: "https://quickcart-yash.netlify.app/",
    codeLink: "https://github.com/yashk20030615/QuickCart.git",
  },
  {
    title: "Login-Signup (MERN)",
    category: "Full-Stack",
    technologies: "React, Node.js, MongoDB, JWT, Express.js",
    description:
      "Full-stack MERN authentication system with secure JWT-based login and signup functionality.",
    image: loginsignupmern,
    liveLink: "https://login-signup-mern-gamma.vercel.app/",
    codeLink: "https://github.com/yashk20030615/Login-Signup-Mern.git",
  },
  {
    title: "Library Management System",
    category: "Full-Stack",
    technologies: "React, Node.js, MongoDB, Express.js, Axios",
    description:
      "CRUD-based library system to manage authors and books with a responsive UI.",
    image: library,
    liveLink: "https://library-management-system-ten-zeta.vercel.app/",
    codeLink: "https://github.com/yashk20030615/Library_Management_System.git",
  },
];

/* ================= Icons ================= */

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CodeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

/* ================= Page ================= */

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section style={sectionStyle}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={eyebrowStyle}
        >
          PROJECTS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={headingStyle}
        >
          Things I've Built
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={subtitleStyle}
        >
          A selection of projects spanning vanilla JS fundamentals to full-stack
          MERN applications — each one sharpened a different part of the stack.
        </motion.p>

        {/* Filter pills */}
        <div style={filterRowStyle}>
          {["All", ...CATEGORY_ORDER].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...filterPillStyle,
                  border: isActive ? "none" : "1px solid rgba(148,163,184,0.25)",
                  background: isActive
                    ? "linear-gradient(90deg, #38bdf8, #a855f7)"
                    : "transparent",
                  color: isActive ? "#0b1120" : "#cbd5f5",
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ================= Project Card ================= */

const ProjectCard = ({ title, category, technologies, description, image, liveLink, codeLink, index }) => {
  const techArray = technologies.split(",");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: Math.min(index, 4) * 0.06 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-60px" }}
      style={cardStyle}
    >
      <div style={contentStyle}>
        <span style={categoryTagStyle}>{category}</span>
        <h2 style={titleStyle}>{title}</h2>

        <div style={chipContainer}>
          {techArray.map((tech, i) => (
            <span key={i} style={chipStyle}>
              {tech.trim()}
            </span>
          ))}
        </div>

        <p style={descStyle}>{description}</p>

        <div style={btnWrap}>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={primaryBtn}
          >
            <ExternalIcon />
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={secondaryBtn}
          >
            <CodeIcon />
            View Code
          </motion.a>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.05 }} style={imgWrap}>
        <img src={image} alt={title} style={imageStyle} loading="lazy" />
      </motion.div>
    </motion.div>
  );
};

/* ================= Styles ================= */

const sectionStyle = {
  minHeight: "100vh",
  padding: "120px 24px 100px",
  background: "radial-gradient(circle at top, #0f172a, #020617 70%)",
};

const eyebrowStyle = {
  fontFamily: BODY_FONT,
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  color: "#38bdf8",
  textAlign: "center",
  marginBottom: "10px",
};

const headingStyle = {
  fontFamily: HEADING_FONT,
  fontSize: "3rem",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  textAlign: "center",
  marginBottom: "16px",
  background: "linear-gradient(90deg,#38bdf8,#a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitleStyle = {
  fontFamily: BODY_FONT,
  textAlign: "center",
  color: "#cbd5f5",
  maxWidth: "640px",
  margin: "0 auto 44px",
  lineHeight: 1.7,
};

const filterRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "56px",
};

const filterPillStyle = {
  fontFamily: BODY_FONT,
  padding: "9px 18px",
  borderRadius: "999px",
  fontSize: "0.85rem",
  fontWeight: 600,
  cursor: "pointer",
};

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "50px",
  padding: "44px",
  marginBottom: "40px",
  borderRadius: "26px",
  background: "rgba(15,23,42,0.8)",
  border: "1px solid rgba(56,189,248,0.25)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  backdropFilter: "blur(14px)",
};

const contentStyle = { flex: "1 1 420px" };

const categoryTagStyle = {
  fontFamily: BODY_FONT,
  display: "inline-block",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#a855f7",
  marginBottom: "10px",
};

const titleStyle = {
  fontFamily: HEADING_FONT,
  fontSize: "2rem",
  fontWeight: 700,
  color: "#f8fafc",
};

const descStyle = {
  fontFamily: BODY_FONT,
  marginTop: "18px",
  color: "#94a3b8",
  lineHeight: 1.8,
};

const chipContainer = { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "14px" };
const chipStyle = {
  fontFamily: BODY_FONT,
  padding: "6px 16px",
  borderRadius: "999px",
  background: "rgba(56,189,248,0.15)",
  border: "1px solid rgba(56,189,248,0.4)",
  color: "#38bdf8",
  fontSize: "0.85rem",
};

const btnWrap = { marginTop: "28px", display: "flex", gap: "16px", flexWrap: "wrap" };

const primaryBtn = {
  fontFamily: BODY_FONT,
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 30px",
  borderRadius: "999px",
  background: "linear-gradient(135deg,#38bdf8,#a855f7)",
  border: "none",
  color: "#0b1120",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
};

const secondaryBtn = {
  fontFamily: BODY_FONT,
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 30px",
  borderRadius: "999px",
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
};

const imgWrap = { flex: "1 1 360px", textAlign: "center" };
const imageStyle = {
  width: "100%",
  maxWidth: "420px",
  borderRadius: "22px",
  border: "3px solid rgba(56,189,248,0.6)",
  boxShadow: "0 25px 60px rgba(56,189,248,0.35)",
};

export default Projects;