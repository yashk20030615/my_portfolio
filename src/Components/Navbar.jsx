import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import resumePDF from "../assets/Yash-Resume.pdf";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Darken navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">Yash Kumar</span>
          <span className="logo-star">🌟</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="desktop-menu">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    className="active-dot"
                    layoutId="active-dot"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume ↗
          </motion.a>
        </div>

        {/* HAMBURGER */}
        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="mobile-links">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-link ${isActive ? "active" : ""}`}
                      onClick={closeMenu}
                    >
                      {isActive && <span className="mobile-active-bar" />}
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mobile-resume-wrap"
            >
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn mobile-resume"
                onClick={closeMenu}
              >
                Resume ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;