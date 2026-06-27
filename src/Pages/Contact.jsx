import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const HEADING_FONT = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY_FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const CONTACT_INFO = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Panipat, Haryana, India",
    color: "#38bdf8",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "yashkumargandhir@gmail.com",
    href: "mailto:yashkumargandhir@gmail.com",
    color: "#a855f7",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 8708634315",
    href: "tel:+918708634315",
    color: "#34d399",
  },
];

const SOCIALS = [
  { icon: FaGithub,    href: "https://github.com/yashk20030615",                    label: "GitHub",    color: "#f0f6fc",  glow: "rgba(240,246,252,0.15)" },
  { icon: FaLinkedin,  href: "https://www.linkedin.com/in/yash-kumar-gandhir/",      label: "LinkedIn",  color: "#0a66c2",  glow: "rgba(10,102,194,0.2)"   },
  { icon: FaInstagram, href: "https://www.instagram.com/yashkumarg15/",              label: "Instagram", color: "#e1306c",  glow: "rgba(225,48,108,0.2)"   },
  { icon: FaEnvelope,  href: "mailto:yashkumargandhir@gmail.com",                    label: "Email",     color: "#38bdf8",  glow: "rgba(56,189,248,0.2)"   },
];

// ── Floating label input ─────────────────────────────────
const FloatingInput = ({ label, name, type = "text", required, textarea }) => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const baseStyle = {
    width: "100%",
    padding: "20px 16px 8px",
    borderRadius: "12px",
    border: `1px solid ${focused ? "#38bdf8" : "rgba(255,255,255,0.1)"}`,
    background: "rgba(255,255,255,0.03)",
    color: "#f8fafc",
    fontFamily: BODY_FONT,
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxShadow: focused ? "0 0 0 3px rgba(56,189,248,0.12)" : "none",
    resize: "none",
  };

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: focused || filled ? 8 : "50%",
    transform: focused || filled ? "translateY(0)" : "translateY(-50%)",
    fontSize: focused || filled ? "0.7rem" : "0.95rem",
    fontFamily: BODY_FONT,
    fontWeight: 600,
    color: focused ? "#38bdf8" : "#64748b",
    transition: "all 0.2s ease",
    pointerEvents: "none",
    letterSpacing: focused || filled ? "0.06em" : 0,
  };

  return (
    <div style={{ position: "relative" }}>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          style={baseStyle}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setFilled(e.target.value.length > 0); }}
          onChange={(e) => setFilled(e.target.value.length > 0)}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          style={{ ...baseStyle, height: 56 }}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setFilled(e.target.value.length > 0); }}
          onChange={(e) => setFilled(e.target.value.length > 0)}
        />
      )}
      <label style={labelStyle}>{label}</label>
    </div>
  );
};

// ── Main ─────────────────────────────────────────────────
const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_r6f006d", "template_08g6h8q", formRef.current, "WU0relUU28WwoQkRF")
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((err) => {
        setStatus("error");
        console.error(err);
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section style={{
      minHeight: "100vh",
      padding: "110px 24px 80px",
      background: "linear-gradient(160deg, #020617 0%, #0d1224 60%, #0a0720 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');`}</style>

      {/* Glows */}
      <div style={{ position:"absolute", top:-100, left:-100, width:400, height:400, background:"radial-gradient(circle,rgba(56,189,248,0.1),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-100, right:-80, width:400, height:400, background:"radial-gradient(circle,rgba(168,85,247,0.1),transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />

      <div style={{ maxWidth: 1080, width: "100%", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: BODY_FONT, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", color: "#38bdf8", marginBottom: 10 }}>
            CONTACT
          </div>
          <h1 style={{ fontFamily: HEADING_FONT, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f8fafc", marginBottom: 14 }}>
            Get In Touch
          </h1>
          <p style={{ fontFamily: BODY_FONT, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            Open to job opportunities, internships and freelance projects.
            Let's build something great together.
          </p>
        </motion.div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>

          {/* ── LEFT card ── */}
          <motion.div {...fadeUp(0.1)} style={{
            background: "rgba(17,24,39,0.7)",
            border: "1px solid rgba(56,189,248,0.12)",
            borderRadius: 20,
            padding: "36px 32px",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}>
            <div>
              <h2 style={{ fontFamily: HEADING_FONT, fontSize: "1.4rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>
                Contact Details
              </h2>
              <p style={{ fontFamily: BODY_FONT, color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Reach out via any channel below — I typically respond within 24 hours.
              </p>
            </div>

            {/* Info rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    background: `${color}14`,
                    border: `1px solid ${color}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: color, fontSize: 17,
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <p style={{ fontFamily: BODY_FONT, fontSize: "0.7rem", fontWeight: 700, color: "#475569", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{ fontFamily: BODY_FONT, fontSize: "0.92rem", color: "#e2e8f0", textDecoration: "none", fontWeight: 500 }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: BODY_FONT, fontSize: "0.92rem", color: "#e2e8f0", fontWeight: 500 }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)" }} />

            {/* Socials */}
            <div>
              <p style={{ fontFamily: BODY_FONT, fontSize: "0.72rem", fontWeight: 700, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Find me on
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {SOCIALS.map(({ icon: Icon, href, label, color, glow }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, boxShadow: `0 8px 20px ${glow}`, borderColor: color, color: color }}
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      border: "1px solid rgba(148,163,184,0.2)",
                      background: "rgba(255,255,255,0.03)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#94a3b8", fontSize: 18,
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.25)",
              borderRadius: 999, padding: "8px 16px", alignSelf: "flex-start",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399", display: "inline-block" }} />
              <span style={{ fontFamily: BODY_FONT, fontSize: "0.8rem", fontWeight: 600, color: "#34d399" }}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT card ── */}
          <motion.div {...fadeUp(0.2)} style={{
            background: "rgba(17,24,39,0.7)",
            border: "1px solid rgba(168,85,247,0.12)",
            borderRadius: 20,
            padding: "36px 32px",
            backdropFilter: "blur(12px)",
          }}>
            <h2 style={{ fontFamily: HEADING_FONT, fontSize: "1.4rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>
              Send a Message
            </h2>
            <p style={{ fontFamily: BODY_FONT, color: "#64748b", fontSize: "0.88rem", marginBottom: 28 }}>
              Fill out the form and I'll get back to you shortly.
            </p>

            <form ref={formRef} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <FloatingInput label="Your Name" name="user_name" required />
              <FloatingInput label="Your Email" name="user_email" type="email" required />
              <FloatingInput label="Your Message" name="message" textarea required />

              {/* Status message */}
              {status === "success" && (
                <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
                  style={{ fontFamily: BODY_FONT, fontSize: "0.88rem", color: "#34d399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 10, padding: "10px 16px" }}>
                  ✅ Message sent successfully! I'll reply soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
                  style={{ fontFamily: BODY_FONT, fontSize: "0.88rem", color: "#f87171", background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.25)", borderRadius: 10, padding: "10px 16px" }}>
                  ❌ Failed to send. Please try again or email directly.
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(56,189,248,0.3)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "sending"}
                style={{
                  fontFamily: BODY_FONT,
                  padding: "15px",
                  borderRadius: 12,
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.03em",
                  background: status === "sending"
                    ? "rgba(56,189,248,0.3)"
                    : "linear-gradient(135deg, #38bdf8, #a855f7)",
                  color: status === "sending" ? "#94a3b8" : "#020617",
                  transition: "background 0.2s ease",
                  marginTop: 4,
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;