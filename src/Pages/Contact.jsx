import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 24px 60px",
        background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
        color: "#f8fafc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* LEFT : CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 300px",
            backgroundColor: "#111827",
            padding: "30px",
            borderRadius: "14px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#38bdf8",
              marginBottom: "14px",
            }}
          >
            Get In Touch
          </h2>

          <p style={{ color: "#cbd5f5", marginBottom: "24px", lineHeight: 1.6 }}>
            I’m open to job opportunities, internships and freelance projects.
            Feel free to connect with me.
          </p>

          <p style={{ marginBottom: "10px" }}>
            📍 <strong>Location:</strong> Panipat, Haryana, India
          </p>

          <p style={{ marginBottom: "20px" }}>
            📧 <strong>Email:</strong> yashkumargandhir@gmail.com
          </p>

        <p style={{ marginBottom: "20px" }}>
            📞 <strong>Phone No :</strong> +91 8708634315
          </p>
          {/* SOCIAL ICONS */}
          <div style={{ display: "flex", gap: "18px", marginTop: "20px" }}>
            <a
              href="https://github.com/yashk20030615"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#f8fafc", fontSize: "22px" }}
            >
              <FaGithub />
            </a>

            <a
            href="https://www.linkedin.com/in/yash-kumar-gandhir/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0a66c2", fontSize: "22px" }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/yashkumarg15/.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#e1306c", fontSize: "22px" }}
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:yashkumargandhir@gmail.com"
              style={{ color: "#38bdf8", fontSize: "22px" }}
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT : CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 300px",
            backgroundColor: "#111827",
            padding: "30px",
            borderRadius: "14px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: 600,
              marginBottom: "20px",
              color: "#a855f7",
            }}
          >
            Send a Message
          </h3>

          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              required
              style={{ ...inputStyle, resize: "none" }}
            />

            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                background:
                  "linear-gradient(135deg, #38bdf8, #a855f7)",
                color: "#020617",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                (e.target.style.opacity = "1")
              }
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  backgroundColor: "#020617",
  color: "#f8fafc",
  outline: "none",
};

export default Contact;
