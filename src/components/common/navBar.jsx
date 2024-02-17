import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
  const { active } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={
                  active === "home" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  active === "about" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "articles" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/articles">Articles</Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="menu-icon" onClick={toggleModal}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
			    <button className="close-button" onClick={toggleModal}>x</button>

          <ul className="modal-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {/* <div className="modal-overlay" onClick={toggleModal}></div> */}
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
