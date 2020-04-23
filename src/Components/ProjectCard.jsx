import React from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "@reach/router";

const ProjectCard = (props) => {
  const { name, tag, img1, img2, img3, repo1, repo2, live } = props.project;
  return (
    <li>
      <b class={styles.word}>{name}</b>
      <br />
      <img src={img1} class={styles.snapshot} />
      <img src={img2} class={styles.second} />
      <img src={img3} class={styles.second} />

      <article class={styles.description}>{tag}</article>
      <br />
      <br />
      {live === "" ? null : <a href={live}>WEBSITE</a>}
      <br />
      <br />
      {repo1 === "" ? null : <a href={repo1}>GITHUB I</a>}
      <br />
      <br />
      {repo2 === "" ? null : <a href={repo2}>GITHUB II</a>}
    </li>
  );
};
export default ProjectCard;
