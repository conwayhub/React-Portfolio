import React from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "@reach/router";

const ProjectCard = (props) => {
  const { name, tag, img1, img2, img3, repo1, repo2, live } = props.project;
  return (
    <li className={styles.card}>
      <b class={styles.word}>{name}</b>
      <br />
      <a href={img1}>
        <img
          src={img1}
          alt="screenshot of the project named"
          class={styles.snapshot}
        />
      </a>
      <a href={img2}>
        <img
          src={img2}
          alt="screenshot of the project named"
          class={styles.second}
        />
      </a>
      <a href={img3}>
        <img
          src={img3}
          alt="screenshot of the project named"
          class={styles.second}
        />
      </a>

      <article class={styles.description}>{tag}</article>
      <br />
      <br />
      {live === "" ? null : (
        <a href={live} className={styles.outsidelink}>
          &ensp;WEBSITE&ensp;
        </a>
      )}
      <br />
      <br />
      {repo1 === "" ? null : (
        <a href={repo1} className={styles.outsidelink}>
          &ensp;GITHUB I&ensp;
        </a>
      )}
      <br />
      <br />
      {repo2 === "" ? null : (
        <a href={repo2} className={styles.outsidelink}>
          &ensp;GITHUB II&ensp;
        </a>
      )}
    </li>
  );
};
export default ProjectCard;
