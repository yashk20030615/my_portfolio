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
        "service_r6f006d",
        "template_08g6h8q",
        formRef.current,
        "WU0relUU28WwoQkRF"
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
        padding: "120px 24px 60px",
        background:
          "radial-gradient(circle at top, #020617 0%, #0f172a 60%, #020617 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "36px",
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={cardStyle}
        >
          <h2 style={headingStyle}>Get In Touch</h2>

          <p style={{ color: "#cbd5f5", marginBottom: "26px", lineHeight: 1.6 }}>
            I’m open to job opportunities, internships and freelance projects.
            Feel free to connect with me.
          </p>

          <div style={{ lineHeight: "1.9" }}>
            <p>📍 <strong>Location:</strong> Panipat, Haryana, India</p>
            <p>📧 <strong>Email:</strong> yashkumargandhir@gmail.com</p>
            <p>📞 <strong>Phone:</strong> +91 8708634315</p>
          </div>

          <div style={socialRow}>
            <SocialIcon href="https://github.com/yashk20030615">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/yash-kumar-gandhir/">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/yashkumarg15/">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="mailto:yashkumargandhir@gmail.com">
              <FaEnvelope />
            </SocialIcon>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={cardStyle}
        >
          <h3 style={subHeadingStyle}>Send a Message</h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
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

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              style={buttonStyle}
            >
              🚀 Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- STYLES ---------- */

const cardStyle = {
  background:
    "linear-gradient(180deg, rgba(17,24,39,0.9), rgba(2,6,23,0.9))",
  padding: "34px",
  borderRadius: "18px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  color: "#f8fafc",
  border: "1px solid rgba(255,255,255,0.06)",
};

const headingStyle = {
  fontSize: "2.2rem",
  fontWeight: 800,
  background: "linear-gradient(135deg, #38bdf8, #a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "16px",
};

const subHeadingStyle = {
  fontSize: "1.7rem",
  fontWeight: 700,
  marginBottom: "12px",
  color: "#a855f7",
};

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.15)",
  backgroundColor: "#020617",
  color: "#f8fafc",
  outline: "none",
  transition: "0.25s",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
  letterSpacing: "0.5px",
  background: "linear-gradient(135deg, #38bdf8, #a855f7)",
  color: "#020617",
};

const socialRow = {
  display: "flex",
  gap: "18px",
  marginTop: "28px",
};

const SocialIcon = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -4, scale: 1.1 }}
    style={{
      width: "42px",
      height: "42px",
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.08)",
      color: "#f8fafc",
      fontSize: "20px",
    }}
  >
    {children}
  </motion.a>
);

export default Contact;
