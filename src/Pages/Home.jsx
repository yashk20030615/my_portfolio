import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "calc(100vh - 70px)",
        paddingTop: "70px",
        background: "#020617",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        color: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.45), transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      <div style={{ textAlign: "center", maxWidth: "900px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            marginBottom: "24px",
          }}
        >
          Welcome to <span style={{ color: "#38bdf8" }}>Yash</span> Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            color: "#cbd5f5",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          I design and develop modern, scalable web applications using the MERN
          stack with clean code, performance optimization, and beautiful UI/UX.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/about")}
          style={{
            padding: "14px 36px",
            borderRadius: "999px",
            background: "linear-gradient(135deg,#38bdf8,#a855f7)",
            border: "none",
            color: "#020617",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Explore More
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
