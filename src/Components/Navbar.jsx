import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>PROGRAMMING</li>
      <li>ARTWORK</li>
      <li>CONTACT</li>
    </ul>
  );
};

export default Navbar;
