import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import resumePDF from "../assets/Resume -Yash_Kumar_Gandhir.pdf";

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const linkStyle = (isActive) => ({
    color: "#e5e7eb",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    position: "relative",
    padding: "6px 0",
    cursor: "pointer",
    borderBottom: isActive ? "2px solid #38bdf8" : "none",
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "78px",
        zIndex: 1000,
        backgroundColor: "#0f172a",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          height: "100%",
          padding: "0 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#f8fafc",
          }}
        >
          Yash Kumar <span style={{ color: "#38bdf8" }}>🌟</span>
        </div>

        {/* Nav Links + Resume */}
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={linkStyle(isActive)}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.name}

                {/* Hover underline */}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-4px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#38bdf8",
                    transform:
                      hovered === item.name ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Link>
            );
          })}

          {/* Resume Button */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              padding: "8px 16px",
              border: "1px solid #38bdf8",
              borderRadius: "6px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#38bdf8";
              e.target.style.color = "#020617";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#38bdf8";
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
