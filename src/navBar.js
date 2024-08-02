import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from './images/icone-globe.png';
import './navBar.css';
import './style.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      {isDesktopOrLaptop && (
        <>
          <div className="nav-center">
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/top-sales">Top sales</a></li>
              <li><a href="/collections">Collections</a></li>
              <li><a href="/our-blog">Our blog</a></li>
              <li><a href="/about-us">About us</a></li>
            </ul>
          </div>
          <div className="nav-actions">
            <a href="/sign-up" className='sign'>Sign up</a>
            <div className="separator"></div>
            <button className="wallet-button">Connect Wallet</button>
          </div>
        </>
      )}
      {(isTablet || isMobile) && (
        <div>
          <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
          </button>
          {isOpen && (
            <ul className="nav-links-mobile">
              <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="/top-sales" onClick={() => setIsOpen(false)}>Top sales</a></li>
              <li><a href="/collections" onClick={() => setIsOpen(false)}>Collections</a></li>
              <li><a href="/our-blog" onClick={() => setIsOpen(false)}>Our blog</a></li>
              <li><a href="/about-us" onClick={() => setIsOpen(false)}>About us</a></li>
              <li><a href="/sign-up" onClick={() => setIsOpen(false)}>Sign up</a></li>
              <li><button className="wallet-button" onClick={() => setIsOpen(false)}>Connect Wallet</button></li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}
