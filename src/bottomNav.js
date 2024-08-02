import React from 'react';
import logo from './images/icone-globe.png';
import './bottomNav.css';

export default function BottomNav() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <hr className="footer-line" />
      <div className="footer-content">
        <div className="title-and-links">
          <h1>Create Explore & Collect Digital NFTs</h1>
          <nav>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
