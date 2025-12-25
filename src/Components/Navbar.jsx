import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
    transition: "border 0.3s",
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
          Yash Kumar<span style={{ color: "#38bdf8" }}>🌟</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}>
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

                {/* Underline hover effect */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
