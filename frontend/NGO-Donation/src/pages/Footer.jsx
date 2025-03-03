import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg text-white mt-5">
      <div className="container py-5">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are a non-profit organization dedicated to making a difference in the world.
              Join us in our mission to create a better future for all.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt me-2"></i>
                भारतीय समाज कल्याण संगठन कार्यालय बाबा भोले नगर, लोहता, पर. देहात अमानत, तह. सदर, जिला वाराणसी
              </li>
              <li><i className="fas fa-phone me-2"></i> +91 9335338714</li>
              <li><i className="fas fa-envelope me-2"></i> <a href="mailto:sangathanbhartiyasamajkalyan@gmail.com">sangathanbhartiyasamajkalyan@gmail.com</a></li>
              <li><i className="fas fa-envelope me-2"></i> <a href="mailto:jagmagkeshari@gmail.com">jagmagkeshari@gmail.com</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/jagmag.keshari" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f">facebook</i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@kesharijagmag" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube">youtube</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-3 footer-bottom">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} भारतीय समाज कल्याण संगठन. All Rights Reserved.
          {/* <link to ="/Refund">Refund Policy</link>
          <link to ="/Terms">Terms of Service</link>
          <link to ="/Privacy">Privacy Policy</link> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
