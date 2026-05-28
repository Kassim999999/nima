import {
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useState, useEffect } from "react";
import "../css/Navbar.css";
// import logo from "../assets/Aurora.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const isHomePage =
    location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Close menu after clicking link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar
      ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }
      ${
        !isHomePage
          ? "light-page"
          : ""
      }`}
    >
      {/* LOGO */}

      <div className="logo-container">
        {/* <img
          src={logo}
          alt="Azizi Spa Logo"
          className="logo-img"
        /> */}

        <h2 className="logo-text">
          Azizi Spa
        </h2>
      </div>

      {/* HAMBURGER */}

      <div
        className={`hamburger ${
          menuOpen ? "active" : ""
        }`}
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* BUTTON */}

      <button
        className="book-btn"
        onClick={() =>
          navigate("/contact")
        }
      >
        Book Now
      </button>
    </nav>
  );
}

export default Navbar;