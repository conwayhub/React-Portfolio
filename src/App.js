import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Programming from "./Components/Programming";
import Artwork from "./Components/Artwork";
import Contact from "./Components/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ScrollableAnchor from "react-scrollable-anchor";

import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFileInvoice);

class App extends React.Component {
  render() {
    return (
      <main class="background">
        <ul class="nav">
          <a href="#top">
            <li>HOME</li>
          </a>
          <a href="#aboutid">
            <li>ABOUT</li>
          </a>
          <a href="#programming">
            <li>PROGRAMMING</li>
          </a>
          <a href="#artid">
            <li>ARTWORK</li>
          </a>
          <a href="#contact">
            <li>CONTACT</li>
          </a>
        </ul>
        <ScrollableAnchor id={"top"}>
          <br />
        </ScrollableAnchor>
        <Header />

        <ScrollableAnchor id={"aboutid"}>
          <br />
        </ScrollableAnchor>
        <About />

        <ScrollableAnchor id={"programming"}>
          <br />
        </ScrollableAnchor>
        <Programming />

        <ScrollableAnchor id={"artid"}>
          <br />
        </ScrollableAnchor>
        <Artwork />

        <ScrollableAnchor id={"contact"}>
          <br />
        </ScrollableAnchor>
        <Contact />
      </main>
    );
  }
}
export default App;
