import { motion } from "framer-motion";

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
const skills = [
  { name: "C Programming", level: 75, logo: cLogo },
  // { name: "Java", level: 70, logo: javaLogo },
  { name: "HTML", level: 90, logo: htmlLogo },
  { name: "CSS", level: 85, logo: cssLogo },
  { name: "JavaScript", level: 80, logo: jsLogo },
  { name: "React.js", level: 75, logo: reactLogo },
  { name: "Node.js", level: 70, logo: nodeLogo },
  { name: "Express.js", level: 70, logo: expressLogo },
  { name: "MongoDB", level: 65, logo: mongoLogo },
  { name: "Git & GitHub", level: 75, logo: gitLogo },
  { name: "MySQL" , level:80 , logo:mysql},
];

const Skills = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px 60px",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "#f8fafc",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "2.4rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "12px",
            color: "#38bdf8",
          }}
        >
          Technical Skills
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5f5",
            maxWidth: "650px",
            margin: "0 auto 50px",
            lineHeight: 1.7,
          }}
        >
          My core technical skill set has been developed through a strong academic
          foundation, hands-on project experience, and a commitment to continuous
          learning, enabling me to build efficient, scalable, and user-focused
          applications.
        </p>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: "#111827",
                padding: "22px",
                borderRadius: "14px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "14px",
                }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{
                    width: "36px",
                    height: "36px",
                    objectFit: "contain",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 600,
                    }}
                  >
                    <span>{skill.name}</span>
                    <span style={{ color: "#38bdf8" }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#1f2937",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #38bdf8, #a855f7)",
                    borderRadius: "999px",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
