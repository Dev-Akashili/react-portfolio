import React from "react";
import binary from "../images/binary.png";
import resume from "../images/resume.pdf";

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="about-row col-lg-7 col-md-7 col-sm-12">
          <h1>Hi, I'm Emeka</h1>
          <p>
            I am a full stack developer. I enjoy building applications and
            solving problems on the web.
          </p>
          <div>
            <a href={resume} className="btn btn-outline-primary cv-button">
              My CV
            </a>
            <a
              href="https://github.com/Dev-Akashili"
              className="btn btn-outline-success git-button"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-5 col-sm-12">
          <img src={binary} alt="" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
