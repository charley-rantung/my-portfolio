import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandIcon from "../../assets/icons/icons8-captain-america.svg";
import "./NavBar.scss";

const NavBar = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      id="NavBar"
      className={
        isScrolled ? "section-container scrolled" : "section-container"
      }
    >
      <div className="navbar-wrapper content-container">
        <span className="brand-wrapper">
          <img src={brandIcon} className="brand-icon" />
          <p className="brand-name">Charr.</p>
        </span>
        <span className="navigation-wrapper">
          <ul>
            <li>
              <Link to={"/"} className={current === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/skills"}
                className={current === "skills" ? "active" : ""}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className={current === "projects" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={current === "about" ? "active" : ""}
              >
                About
              </Link>
            </li>
          </ul>
        </span>
        {/* <span>Switch</span> */}
      </div>
    </nav>
  );
};

export default NavBar;
