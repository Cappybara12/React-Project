import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';
import Image from 'next/image'; // Import the Image component

function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <Image src="/logo.png" alt="Your Logo" width={150} height={50} />
        </a>
      </div>
      <div className={styles.navbarMenu}>
        <ul className={styles.menuVisible}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Additional content for creativity */}
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <button className={`${styles.menuToggle} ${isMenuVisible ? styles.open : ''}`} onClick={toggleMenu}>
          {isMenuVisible ? 'Close' : 'Menu'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
