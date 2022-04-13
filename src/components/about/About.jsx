import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsCodeSlash } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdOutlineEngineering } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineEngineering className="about__icon" />
              <h5>Engineering</h5>
              <small>6+ years experience</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Coding</h5>
              <small>6+ Languages</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Courses</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Throughout my life, I've been passionate about computer science.
            That's why I became a programmer and I turned from building
            constructions to building websites.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
