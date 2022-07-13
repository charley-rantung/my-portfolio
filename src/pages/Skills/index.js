import React from "react";
import "./skills.scss";
import { CloudAnimation, NavBar } from "../../components";

const Skills = () => {
  return (
    <>
      <NavBar current={"skills"} />
      <main className="skills">
        {/* FRONT END SECTION */}
        <section id="FrontEnd" className="section-container">
          <div className=" skills-wrapper content-container">
            <h1 className="skill-title">Front-End</h1>
            <p className="skill-description">
              This is what i use when developing frontend projects
            </p>
            <div className="img-wrapper">
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="html5"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="css3"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="javascript"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="react"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                alt="sass"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="bootstrap"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                alt="materialui"
              />
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt="redux"
              />
            </div>
          </div>
        </section>
        {/* BACK END SECTION */}
        <section id="BackEnd" className="section-container">
          <div className=" skills-wrapper content-container">
            <h1 className="skill-title">Back-End</h1>
            <p className="skill-description">
              This is what i use when developing frontend projects
            </p>
            <div className="img-wrapper">
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="nodejs"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="express"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                alt="php"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="firebase"
              />
            </div>
          </div>
        </section>
        {/* DATABASE SECTION */}
        <section id="Database" className="section-container">
          <div className=" skills-wrapper content-container">
            <h1 className="skill-title">Database</h1>
            <p className="skill-description">
              This is what i use when developing database projects
            </p>
            <div className="img-wrapper">
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="mysql"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="mongodb"
              />
            </div>
          </div>
        </section>
        {/* TOOLS SECTION */}
        <section id="Tools" className="section-container">
          <div className=" skills-wrapper content-container">
            <h1 className="skill-title">Tools</h1>
            <p className="skill-description">
              This is what i use when developing frontend projects
            </p>
            <div className="img-wrapper">
              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="git"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="figma"
              />

              <img
                className="skill-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                alt="jira"
              />
            </div>
          </div>
        </section>
      </main>
      <CloudAnimation />
    </>
  );
};

export default Skills;
