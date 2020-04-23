import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  state = { name: "", email: "", message: "" };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    var service_id = "default_service";
    var template_id = "thanks";
    var user_id = "user_WizlMhkliHgnc2Ot6ayDf";
    emailjs.send(service_id, template_id, this.state, user_id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    this.resetForm();
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <main className={styles.content}>
        <h1>CONTACT</h1>
        <p>
          If you'd like to see more of my work, please check out my Github,
          LinkedIn, or CV, or send me a message below!
        </p>
        <nav className={styles.iconlinks}>
          <ul>
            <li>
              <a
                href="https://github.com/conwayhub"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="4x"
                  className={styles.githubicon}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/conway-mcdermott-48469276/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="4x"
                  className={styles.linkedinicon}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/conway-mcdermott-48469276/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  icon={"file-invoice"}
                  size="4x"
                  className={styles.linkedinicon}
                />
              </a>
            </li>
          </ul>
        </nav>

        <form id="form" className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Email:{" "}
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <br />
          <label>
            Message:{" "}
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
          </label>
          <button>Submit</button>
        </form>
      </main>
    );
  }
}

export default Contact;
