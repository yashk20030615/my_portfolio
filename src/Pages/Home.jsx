import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #020617 0%, #020617 40%, #020617 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        color: "#f8fafc",
      }}
    >
      {/* Gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.45), transparent 65%)",
          filter: "blur(120px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-150px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle at center, rgba(168,85,247,0.45), transparent 65%)",
          filter: "blur(140px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.8rem",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
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
            fontSize: "1.15rem",
            color: "#cbd5f5",
            maxWidth: "680px",
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
        I design and develop modern, scalable web applications using the MERN stack, combining clean code practices, performance optimization, and thoughtful UI/UX to deliver reliable and impactful digital experiences.

        </motion.p>

        {/* Single Explore More button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "14px 36px",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, #38bdf8, #a855f7)",
              color: "#020617",
              fontWeight: 600,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow:
                "0 12px 40px rgba(56,189,248,0.35)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.boxShadow =
                "0 18px 50px rgba(168,85,247,0.45)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 12px 40px rgba(56,189,248,0.35)";
            }}
            onClick={() => navigate("/about")}
          >
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
