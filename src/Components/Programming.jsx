import React from "react";
import styles from "./Programming.module.css";
import ProjectCard from "./ProjectCard";
import NcNews3 from "../Images/ncnewscomment.png";
import NcNews1 from "../Images/ncnews.png";
import NcNews2 from "../Images/ncnewsloading.png";
import Bfly1 from "../Images/bflyhunt1.png";
import Bfly2 from "../Images/bflyhunt2.png";
import Bfly3 from "../Images/fishiesquare.jpg";
import Web1 from "../Images/firstwebsite.png";
import Web2 from "../Images/secondwebsite.png";
import Web3 from "../Images/thirdwebsite.png";

class Programming extends React.Component {
  state = {
    show: "",
    projects: [
      {
        name: "BUTTERFLY HUNT",
        img1: Bfly1,
        img2: Bfly2,
        img3: Bfly3,
        tag:
          "Buterfly Hunt is a Marker based Augmented Reality game. It is made up of a single page application built in Vue, which connects to a seperately hosted Web-AR application.  It is also an apology for the crimes against CSS I committed on my NC-News project.",
        repo1: "https://github.com/Harriet-Blundell/ScavengerHuntAR",
        repo2: "https://github.com/conwayhub/Butterfly-Hunt-AR",
        live: "https://butterflyhunt.co.uk/",
      },
      {
        name: "NC NEWS",
        img1: NcNews1,
        img2: NcNews2,
        img3: NcNews3,
        tag:
          "NC News is a reddit style news filter, on which logged in users can comment, vote on, and filter through articles based on topic. It is also a humble memorial to the html marquee tag, which I will forever mourn the loss of.",
        repo1: "https://github.com/conwayhub/front-end-nc-news",
        repo2: "https://github.com/conwayhub/be-nc-news",
        live: "https://newsfromthenorth.netlify.app/",
      },

      {
        name: "WEB DESIGN",
        img1: Web1,
        img2: Web2,
        img3: Web3,
        tag:
          "I rebuilt this portfolio site about five times, since I began my first forays into programming!  Many of these attempts I dismissed, on the belief that I would eventually make something that looked businesslike and professional.  Perhaps one day I will.",
        repo1: "https://github.com/conwayhub/Portfolio-Site",
        repo2: "",
        live: "",
      },
    ],
  };

  render() {
    return (
      <main className={styles.content}>
        <h1>PROGRAMMING</h1>
        <p>Please feel free to take a look at my GITHUB and my CV</p>
        <h2>PROJECTS</h2>
        <ul className={styles.projects}>
          {this.state.projects.map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
        </ul>
      </main>
    );
  }
}
export default Programming;
