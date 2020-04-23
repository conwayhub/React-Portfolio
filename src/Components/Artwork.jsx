import React from "react";
import styles from "./Artwork.module.css";
import ProjectCard from "./ProjectCard";
import Americana1 from "../Images/AmericanaLeeds15.jpg";
import Americana2 from "../Images/AmericanaScarborough3.jpg";
import Americana3 from "../Images/AmericanaStratford10.jpg";

import Coach1 from "../Images/CoachHouse1.jpg";
import Coach2 from "../Images/CoachHouse2.jpg";
import Coach3 from "../Images/CoachHouse3.jpg";

import Fact1 from "../Images/fact.jpeg";
import Fact2 from "../Images/Fairytale.png";
import Fact3 from "../Images/Facilitating.jpg";

import Drag1 from "../Images/Drag.jpg";
import Drag2 from "../Images/Horse.jpg";
import Drag3 from "../Images/SoloEatMe7.jpg";
import ArtCV from "../CorrectedConwayMcDermott2020.pdf";
class Artwork extends React.Component {
  state = {
    projects: [
      {
        name: "AMERICANA",
        img1: Americana1,
        img2: Americana2,
        img3: Americana3,
        tag:
          "This large scale musical started out as a passion project and has since been staged in Leeds, Edinburgh, Scarborough and London. The current production rights are held by Rigmarole.",
        repo1: "",
        repo2: "",
        live: "https://www.youtube.com/watch?v=U1RR51C07Dg2",
      },
      {
        name: "COACH HOUSE",
        img1: Coach1,
        img2: Coach2,
        img3: Coach3,
        tag:
          "I've been commissioned a number of times by this anarchist theater collective, for storytelling, experimental theater, and performances.",
        repo1: "",
        repo2: "",
        live: "https://www.facebook.com/TheCoachHouseLpool/",
      },
      {
        name: "FACT",
        img1: Fact1,
        img2: Fact2,
        img3: Fact3,
        tag:
          "FACT - Also known as Film, Art, and Creative Technology - run a bold program of curating and commissioning interactive, technologically driven artwork in all mediums.  I've had the chance to work with them a number of times as a performer, a facilitator, and an artist.",
        repo1: "",
        repo2: "",
        live: "https://www.fact.co.uk/",
      },
      {
        name: "DRAG",
        img1: Drag1,
        img2: Drag2,
        img3: Drag3,
        tag:
          "I'm a resident performer at a Queer Cabaret night, and perform there regularly, It is a raucus, political outlet and a tight knit family, who allows for a lot of liberation, creation, and experimentation. ",
        repo1: "",
        repo2: "",
        live: "https://www.bidolito.co.uk/feature-eat-me-preach/",
      },
    ],
  };
  render() {
    return (
      <main className={styles.content}>
        <h1>ARTS</h1>
        <p>
          If you'd like to know more about my freelance work, check out my
          seperate <a href={ArtCV}>Arts CV.</a>{" "}
        </p>
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

export default Artwork;
