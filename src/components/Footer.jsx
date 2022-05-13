import React from "react";
import code from "../images/code.png";
import passport from "../images/passport.png";

function Footer() {
  return (
    <section id="footer">
      <div className="row footer-div">
        <div className="footer-class col-lg-7 col-md-12 col-sm-12">
          <img src={code} alt="" className="footer-image bbb" />
        </div>

        <div className="footer-section col-lg-5 col-md-12 col-sm-12">
          <img
            src={passport}
            alt="passport"
            className="footer-image footer-edit"
          />
          <div>
            <div className="footer-img-text">
              <h3>Akashili Emeka</h3>
              <h5>Software Engineer</h5>
              <br></br>
            </div>
            <p className="footer-note">
              “Hello World!”- This was me sometime in 2020, a curious and eager
              student, at the start of what would go on to be the most
              fulfilling career choice I’ve ever made. And now? I write code to
              solve simple and complex problems, and sometimes to create fun
              stuff. When I'm not coding, I'm either watching anime, gaming or
              just chilling outside, observing nature.
            </p>
            <a
              className="btn btn-lg btn-outline-light"
              href="mailto:chukwuemeka.akashili@gmail.com"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      <p className="footer-p">Copyright © Akashili 2022</p>
    </section>
  );
}

export default Footer;
