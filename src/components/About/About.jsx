import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          // src={getImageUrl("about/aboutImage.png")}
          src='https://pics.craiyon.com/2023-05-27/06538c41a3dd4a43b24553f26c0c7a5c.webp'
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
              I am a passionate Full stack developer with extensive expertise in front-end development, encompassing HTML, CSS, Tailwind CSS, JavaScript, React, and Node.js.
              I have created projects utilizing the aforementioned technology stacks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              {/* <h3>Backend Developer</h3> */}
              <p>
              I had completed a Full Stack Development course at Newton School, where I gained proficiency in a variety of technologies including various frameworks and Libraries. Through this program, I have developed a strong foundation in software development and 
              am eager to apply my skills in a professional setting
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
