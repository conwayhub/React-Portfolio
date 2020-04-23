import React from "react";
import Moon from "../moontexture.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className={styles.head}>
        <header>
          <h1 className={styles.name}>CONWAY MCDERMOTT</h1>
        </header>
        <div className={styles.link}>
          {" "}
          <a href="#top">
            <img src={Moon} className={styles.fullmoon} />
            <p className={styles.top}>HOME</p>
          </a>
        </div>
        <br />
        <div className={styles.link}>
          <a href="#programming">
            <img src={Moon} className={styles.halfleft} />
            <p className={styles.lefttext}>PROGRAMMING</p>
          </a>
          <a href="#artid">
            <img src={Moon} className={styles.halfright} />{" "}
            <p className={styles.righttext}>ARTWORK</p>
          </a>
        </div>
        <br />
        <div className={styles.link}>
          <a href="#aboutid">
            <img src={Moon} className={styles.cresentleft} />
            <p className={styles.bottomleft}>ABOUT</p>{" "}
          </a>

          <a href="#contact">
            <img src={Moon} className={styles.cresentright} />{" "}
            <p className={styles.bottomright}>CONTACT</p>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
