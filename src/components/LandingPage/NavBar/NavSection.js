import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "../NavBar/NavStyle.css";
import web_logo from "../../../assets/logo/web_logo.png";

const NavSection = () => {
  const handleRefresh = (event) => {
    event.preventDefault(); // Prevent the default HashLink scroll behavior
    window.location.href = window.location.origin; // Refresh the page and navigate to the index route
  };

  useEffect(() => {
    // Redirect to the homepage on initial load
    if (window.location.pathname !== "/") {
      window.location.href = window.location.origin;
    }
  }, []);

  return (
    <nav className="nav-cont">
      <a href="/" onClick={handleRefresh}>
        <div className="logo" title="VCT Dispatch">
          <img className="nav-img" alt="Valorant Logo" src={web_logo} />
          <div>
            <h2 className="nav-name">
              VCT <br /> DISPATCH
            </h2>
          </div>
        </div>
      </a>
      <div className="nav-links">
        <HashLink className="item" to="/" onClick={handleRefresh}>
          HOME
        </HashLink>
        <HashLink className="item" to="/#articles">
          LATEST NEWS
        </HashLink>
        <HashLink className="item" to="/#about">
          ABOUT
        </HashLink>
      </div>
    </nav>
  );
};

export default NavSection;
