import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p className="about-us">The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.</p>
            <div className="icons-footer">
              <FaXTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
            </div>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-link">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="footer-link">
              <li>Wishlist</li>
              <li>My account</li>
              <li>Product</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p className="about-us">Write your email first to know about any information</p>
            <div className="email-input">
              <input type="email" placeholder="Email Adress" />
              <FaEnvelope />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
