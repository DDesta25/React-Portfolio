import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid bg-secondary text-white">
        <Link className="navbar-brand" to="/">
          Daniel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-secondary">
            <li className="nav-item badge text-bg-primary text-wrap">
              <Link className="nav-link active" aria-current="page" to="/">
                About
              </Link>
            </li>
            <li className="nav-item badge text-bg-primary text-wrap">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li
              className="nav-item badge text-bg-primary text-wrap"
            >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item badge text-bg-primary text-wrap">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
