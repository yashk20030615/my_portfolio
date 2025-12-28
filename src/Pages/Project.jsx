import { motion } from "framer-motion";
import todojs from "../assets/TodoList--JS.png";
import todoreact from "../assets/TodoList---React.png";
import blabla from "../assets/BlablacarClone.png";
const Projects = () => {
  const handleRedirect = async(url)=>{
    try{
      await fetch("https://jsonplaceholder.typicode.com/posts/1");
      window.open(url, "_blank");
    }catch (error) {
      console.error("API call failed");
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px 80px",
        backgroundColor: "#020617",
        color: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        {/* Page Heading */}
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 700,
            color: "#38bdf8",
            marginBottom: "70px",
            textAlign: "center",
          }}
        >
          Projects
        </h1>

        {/* ================= PROJECT 1 ================= */}
        <ProjectCard
          title="To-Do List (JavaScript)"
          technologies="HTML, CSS, JavaScript"
          description="A simple and interactive To-Do List application that allows users to add, delete and manage daily tasks efficiently. This project focuses on DOM manipulation, event handling and clean UI."
          image={todojs}
          liveLink="https://yashk20030615.github.io/To-Do-List---Js/"
          codeLink="https://github.com/yashk20030615/To-Do-List---Js.git"
          handleRedirect={handleRedirect}
        />

        {/* ================= PROJECT 2 ================= */}
        <ProjectCard
          title="To-Do List (React)"
          technologies="React, Vite"
          description="A React-based To-Do List application with component-based architecture and state management. This project demonstrates React hooks, reusable components and fast build using Vite."
          image={todoreact}
          liveLink="https://your-portfolio-live-link.com"
          codeLink="https://github.com/yashk20030615/To-Do-List---React.git"
          handleRedirect={handleRedirect}
        />
        {/*==================PROJECT 3====================*/}
        <ProjectCard 
          title="Go Ride(Blablacar Clone)"
          technologies="React,Redux,NodeJS,ExpressJS & MongoDB"
          description="GoRIde is "
          image={blabla}
          liveLink=""
          codeLink=""
          handleRedirect={handleRedirect}
          />
          {/*=================PROJECT 4=====================*/}
          <ProjectCard
            title="QuickCart"
            technologies="React,Redux"
            description=""
            image={blabla}
            liveLink=""
            codeLink=""
            handleRedirect={handleRedirect}
            />

      </div>
    </section>
  );
};

/* ================= Reusable Project Card ================= */
const ProjectCard = ({
  title,
  technologies,
  description,
  image,
  liveLink,
  codeLink,
  handleRedirect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: "#111827",
        borderRadius: "16px",
        padding: "36px",
        marginBottom: "70px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.45)",
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {/* Left Content */}
      <div style={{ flex: "1 1 450px" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>

        <p style={{ color: "#cbd5f5", marginBottom: "8px" }}>
          <strong>Technologies Used:</strong> {technologies}
        </p>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.7,
            marginTop: "14px",
          }}
        >
          <strong>About Project:</strong> {description}
        </p>

        {/* Buttons */}
        <div style={{ marginTop: "22px", display: "flex", gap: "16px" }}>
          <button
            style={buttonStyle}
            onClick={() => handleRedirect(liveLink)}
          >
            Live Demo
          </button>

          <button
            style={{
              ...buttonStyle,
              background: "#1f2937",
              color: "#38bdf8",
            }}
            onClick={() => handleRedirect(codeLink)}
          >
            View Code
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div style={{ flex: "1 1 350px", textAlign: "center" }}>
        <img src={image} alt={title} style={imageStyle} />
      </div>
    </motion.div>
  );
};

/* ================= Styles ================= */
const buttonStyle = {
  padding: "12px 28px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  background: "linear-gradient(135deg, #38bdf8, #a855f7)",
  color: "#020617",
};

const imageStyle = {
  width: "100%",
  maxWidth: "380px",
  borderRadius: "14px",
  border: "3px solid #38bdf8",
  boxShadow: "0 12px 30px rgba(56,189,248,0.35)",
};

export default Projects;
