import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const iconStyle = {
    color: "#cbd5f5",
    fontSize: "18px",
    cursor: "pointer",
    transition: "color 0.3s, transform 0.3s",
  };

  return (
    <footer
      style={{
        padding: "20px 10px",
        backgroundColor: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
      }}
    >
      {/* Text */}
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "#cbd5f5",
          letterSpacing: "0.6px",
        }}
      >
        Made by{" "}
        <span style={{ color: "#38bdf8", fontWeight: 600 }}>
          Yash Kumar Gandhir
        </span>
      </p>

      {/* Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "14px",
        }}
      >
        <a
          href="https://www.facebook.com/yashkumar.gandhir.9"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.firstChild.style.color = "#38bdf8";
            e.currentTarget.firstChild.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.firstChild.style.color = "#cbd5f5";
            e.currentTarget.firstChild.style.transform = "translateY(0)";
          }}
        >
          <FaFacebookF style={iconStyle} />
        </a>

        <a
          href="https://www.instagram.com/yashkumarg15/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.firstChild.style.color = "#e1306c";
            e.currentTarget.firstChild.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.firstChild.style.color = "#cbd5f5";
            e.currentTarget.firstChild.style.transform = "translateY(0)";
          }}
        >
          <FaInstagram style={iconStyle} />
        </a>

        <a
          href="https://www.linkedin.com/in/yash-kumar-gandhir/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.firstChild.style.color = "#0a66c2";
            e.currentTarget.firstChild.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.firstChild.style.color = "#cbd5f5";
            e.currentTarget.firstChild.style.transform = "translateY(0)";
          }}
        >
          <FaLinkedinIn style={iconStyle} />
        </a>

        <a
          href="https://github.com/yashk20030615"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => {
            e.currentTarget.firstChild.style.color = "#ffffff";
            e.currentTarget.firstChild.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.firstChild.style.color = "#cbd5f5";
            e.currentTarget.firstChild.style.transform = "translateY(0)";
          }}
        >
          <FaGithub style={iconStyle} />
        </a>
      </div>

      {/* Copyright */}
      <p
        style={{
          margin: 0,
          marginTop: "14px",
          fontSize: "13px",
          color: "#cbd5f5",
          letterSpacing: "0.6px",
        }}
      >
        © 2025 | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
