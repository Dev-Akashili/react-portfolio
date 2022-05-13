import React from "react";
import cpu from "../images/cpu.png";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import javascript from "../images/javascript.png";
import physics from "../images/physics.png";
import nodejs from "../images/nodejs.png";
import python from "../images/python.png";
import git from "../images/git.png";

function Skills() {
  return (
    <section id="skills">
      <div className="text-edit">
        <img src={cpu} alt="" className="heading-img" />
        <h1>Skills & Technologies</h1>
        <p>
          I work with modern frontend and backend technology to deliver
          responsive and interactive web applications. Here is my tech stack:
        </p>
      </div>

      <div className="parent">
        <div class="grid-item">
          <img src={html} alt="" className="skills-img" />
          <h5 className="skills-float">Html5</h5>
        </div>
        <div class="grid-item">
          <img src={css} alt="" className="skills-img" />
          <h5 className="skills-float">Css3</h5>
        </div>
        <div class="grid-item">
          <img src={bootstrap} alt="" className="skills-img" />
          <h5 className="skills-float">Bootstrap</h5>
        </div>
        <div class="grid-item">
          <img src={javascript} alt="" className="skills-img" />
          <h5 className="skills-float">JavaScript</h5>
        </div>
        <div class="grid-item">
          <img src={physics} alt="" className="skills-img" />
          <h5 className="skills-float">React</h5>
        </div>
        <div class="grid-item">
          <img src={nodejs} alt="" className="skills-img" />
          <h5 className="skills-float">NodeJS</h5>
        </div>
        <div class="grid-item">
          <img src={python} alt="" className="skills-img" />
          <h5 className="skills-float">Python</h5>
        </div>
        <div class="grid-item">
          <img src={git} alt="" className="skills-img" />
          <h5 className="skills-float">Git</h5>
        </div>
      </div>
    </section>
  );
}

export default Skills;
