import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r6f006d",      // 🔁 YOUR SERVICE ID
        "template_08g6h8q",     // 🔁 YOUR TEMPLATE ID
        formRef.current,
        "WU0relUU28WwoQkRF"    // 🔁 YOUR PUBLIC KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

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
        {/* LEFT : SAME AS BEFORE */}
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
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#38bdf8" }}>
            Get In Touch
          </h2>

          <p style={{ color: "#cbd5f5", marginBottom: "24px" }}>
            I’m open to job opportunities, internships and freelance projects.
            Feel free to connect with me.
          </p>

          <p>📍 <strong>Location:</strong> Panipat, Haryana, India</p>
          <p>📧 <strong>Email:</strong> yashkumargandhir@gmail.com</p>
          <p>📞 <strong>Phone:</strong> +91 8708634315</p>

          <div style={{ display: "flex", gap: "18px", marginTop: "20px" }}>
            <a href="https://github.com/yashk20030615" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/yash-kumar-gandhir/" target="_blank" rel="noreferrer">
              <FaLinkedin size={22} color="#0a66c2" />
            </a>
            <a href="https://www.instagram.com/yashkumarg15/" target="_blank" rel="noreferrer">
              <FaInstagram size={22} color="#e1306c" />
            </a>
            <a href="mailto:yashkumargandhir@gmail.com">
              <FaEnvelope size={22} color="#38bdf8" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT : FORM (WORKING NOW) */}
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
          <h3 style={{ fontSize: "1.6rem", color: "#a855f7" }}>
            Send a Message
          </h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              style={{ ...inputStyle, resize: "none" }}
            />

            <button type="submit" style={buttonStyle}>
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
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  background: "linear-gradient(135deg, #38bdf8, #a855f7)",
  color: "#020617",
};

export default Contact;
