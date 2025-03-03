import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/Header.css';
import '../pages/ContactUs/Get-in-touch'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo & Title */}
        <div className="logo-container">
          <img src="./src/assets/Logo.jpg" alt="Logo" className="logo-image" />
          <h3 className="brand-title">भारतीय समाज कल्याण संगठन</h3>
        </div>

        {/* Navbar Toggler (for Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">


            {/* Dropdown for About Us */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
    <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/">About Us</Link></li>
    <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/Members">Members of भारतीय समाज कल्याण संगठन</Link></li>
    <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/impact">Impact</Link></li>
    <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/reach-presence">Reach & Presence</Link></li>
    <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/civic-driven">Civic Driven Change</Link></li>
    {/* <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/smilestones">milestones</Link></li> */}
    <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/good-governance">Good Governance</Link></li>
</ul>

            </li>

            {/* Dropdown for About Us */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Our Work
              </a>
              <ul className="dropdown-menu">

                <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/education">Education</Link></li>
                <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/health">Health</Link></li>
                <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/livelihood">Livelihood</Link></li>
                <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/women_empowerment">Women Empowerment</Link></li>
                {/* <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/disaster_response">Disaster Response</Link></li> */}
                {/* <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/empowering_grassroots">Empowering Grassroots</Link></li> */}
                {/* <li><Link className="dropdown-item" style={{ backgroundColor: "orange", color: "black", borderBottom: "1px solid black" }} to="/privileged_children">Privileged Children</Link></li> */}

              </ul>
            </li>

            <li className="nav-item">
              <Link to="/join" className="nav-link">Join Members</Link>
            </li>

            <li className="nav-item">
              <Link to="/donate" className="btn donate-btn">Donate</Link>
            </li>
            {/* Dropdown for About Us */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Contact Us
              </a>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item   style{{backGroundColor: orange color: Black}}" to="/Getintouch">Get in touch</Link></li>
                <li><Link className="dropdown-item  style{{backGroundColor: orange color: Black}}" to="/FAQs">FAQs</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
