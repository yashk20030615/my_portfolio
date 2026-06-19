import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import resumePDF from "../assets/Yash-Resume.pdf";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo">
          Yash Kumar <span>🌟</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
          <a href={resumePDF} target="_blank" className="resume-btn">
            Resume
          </a>
        </div>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a href={resumePDF} target="_blank">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
