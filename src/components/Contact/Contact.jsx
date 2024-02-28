import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="Email icon" />
          <a href="mailto:arjunjeya9475@email.com">+91 97905 34593</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:arjunjeya9475@email.com">arjunjeya9475@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/malligarjunp">www.linkedin.com/in/malligarjunp</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Ajuarjun5007">https://github.com/Ajuarjun5007</a>
        </li>
      </ul>
    </footer>
  );
};
