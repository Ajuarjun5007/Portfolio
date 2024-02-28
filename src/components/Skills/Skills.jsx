import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import otherskills from "../../data/otherskills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Skills = () =>{
    return(
        <section className={styles.container} id="Skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <h2 className={styles.title}>Other skills</h2>
        <div className={styles.skills}>
          {otherskills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </section>
    )
}