import { motion } from "framer-motion";

import todojs from "../assets/TodoList--JS.png";
import todoreact from "../assets/TodoList---React.png";
import quickcart from "../assets/quickcart.png";
import loginsignup from "../assets/loginsignup.png";
import loginsignupmern from "../assets/loginsignupmern.png";
import counter from "../assets/counter.png";
import library from "../assets/Library_mgmt_system.png";
import clock from "../assets/Clock.png";

const Projects = () => {
  const handleRedirect = async (url) => {
    if (!url) return;
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1");
      window.open(url, "_blank");
    } catch (error) {
      console.error("API call failed");
    }
  };

  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={headingStyle}
        >
          Projects ✨
        </motion.h1>

        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} handleRedirect={handleRedirect} />
        ))}
      </div>
    </section>
  );
};

/* ================= Projects Data ================= */

const projects = [
  {
    title: "Login-Signup",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Responsive Login and Signup system with form validation, smooth UI interactions and clean front-end architecture.",
    image: loginsignup,
    liveLink: "https://yashk20030615.github.io/Login-Signup/",
    codeLink: "https://github.com/yashk20030615/Login-Signup.git",
  },
  {
    title: "To-Do List (JavaScript)",
    technologies: "HTML, CSS, JavaScript, DOM",
    description:
      "Interactive to-do list application focusing on DOM manipulation, event handling and task management.",
    image: todojs,
    liveLink: "https://yashk20030615.github.io/To-Do-List---Js/",
    codeLink: "https://github.com/yashk20030615/To-Do-List---Js.git",
  },
  {
    title: "Digital Clock",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Real-time digital clock displaying current time and date using JavaScript timing functions.",
    image: clock,
    liveLink: "https://yashk20030615.github.io/Clock/",
    codeLink: "https://github.com/yashk20030615/Clock.git",
  },
  {
    title: "To-Do List (React)",
    technologies: "React, Vite",
    description:
      "React-based to-do list using component architecture, hooks and fast build setup with Vite.",
    image: todoreact,
    liveLink: "https://to-do-list-react-yash.netlify.app/",
    codeLink: "https://github.com/yashk20030615/To-Do-List-React.git",
  },
  {
    title: "Counter App",
    technologies: "React, Vite",
    description:
      "Multi-operation counter app implementing React state management and real-time UI updates.",
    image: counter,
    liveLink: "https://counterapp-weld.vercel.app/",
    codeLink: "https://github.com/yashk20030615/Counterapp.git",
  },
  {
    title: "QuickCart",
    technologies: "React, Redux Toolkit,Bootstrap",
    description:
      "E-commerce app with product listing, cart management and dynamic price updates using Redux Toolkit.",
    image: quickcart,
    liveLink: "https://quickcart-yash.netlify.app/",
    codeLink: "https://github.com/yashk20030615/QuickCart.git",
  },
  {
    title: "Login-Signup (MERN)",
    technologies: "React, Node.js, MongoDB, JWT, Express.js",
    description:
      "Full-stack MERN authentication system with secure JWT-based login and signup functionality.",
    image: loginsignupmern,
    liveLink: "https://login-signup-mern-gamma.vercel.app/",
    codeLink: "https://github.com/yashk20030615/Login-Signup-Mern.git",
  },
  {
    title: "Library Management System",
    technologies: "React, Node.js, MongoDB, Express.js ,Axios ",
    description:
      "CRUD-based library system to manage authors and books with a responsive UI.",
    image: library,
    liveLink: "https://library-management-system-ten-zeta.vercel.app/",
    codeLink: "https://github.com/yashk20030615/Library_Management_System.git",
  },
];

/* ================= Project Card ================= */

const ProjectCard = ({
  title,
  technologies,
  description,
  image,
  liveLink,
  codeLink,
  handleRedirect,
}) => {
  const techArray = technologies.split(",");

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      style={cardStyle}
    >
      <div style={contentStyle}>
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
          <button style={primaryBtn} onClick={() => handleRedirect(liveLink)}>
            Live Demo
          </button>
          <button style={secondaryBtn} onClick={() => handleRedirect(codeLink)}>
            View Code
          </button>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.08 }} style={imgWrap}>
        <img src={image} alt={title} style={imageStyle} />
      </motion.div>
    </motion.div>
  );
};

/* ================= Styles ================= */

const sectionStyle = {
  minHeight: "100vh",
  padding: "140px 24px",
  background:
    "radial-gradient(circle at top, #0f172a, #020617 70%)",
};

const headingStyle = {
  fontSize: "3.2rem",
  fontWeight: 900,
  textAlign: "center",
  marginBottom: "100px",
  background: "linear-gradient(90deg,#38bdf8,#a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "50px",
  padding: "50px",
  marginBottom: "90px",
  borderRadius: "26px",
  background: "rgba(15,23,42,0.8)",
  border: "1px solid rgba(56,189,248,0.25)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  backdropFilter: "blur(14px)",
};

const contentStyle = { flex: "1 1 420px" };
const titleStyle = { fontSize: "2.2rem", fontWeight: 800, color: "#f8fafc" };
const descStyle = { marginTop: "18px", color: "#94a3b8", lineHeight: 1.8 };

const chipContainer = { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" };
const chipStyle = {
  padding: "6px 16px",
  borderRadius: "999px",
  background: "rgba(56,189,248,0.15)",
  border: "1px solid rgba(56,189,248,0.4)",
  color: "#38bdf8",
  fontSize: "0.85rem",
};

const btnWrap = { marginTop: "28px", display: "flex", gap: "16px" };
const primaryBtn = {
  padding: "12px 34px",
  borderRadius: "999px",
  background: "linear-gradient(135deg,#38bdf8,#a855f7)",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "12px 34px",
  borderRadius: "999px",
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  fontWeight: 600,
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
