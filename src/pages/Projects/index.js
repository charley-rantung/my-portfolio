import React from "react";
import "./projects.scss";
import { CloudAnimation, NavBar } from "../../components";

const Projects = () => {
  return (
    <>
      <NavBar current={"projects"} />
      <main className="projects">
        <section id="Portofolio" className="section-container">
          <div className=" portofolio-container content-container">
            <h1 className="title">Awesome Portfolio</h1>
            <p className="description">
              The following are the best portfolios during the career path as a
              freelancer
            </p>
            <div className="cards">
              <div className="project-card">
                <div className="content">
                  <p className="project-category">UI/UX Design</p>
                  <h1 className="project-name">UI/UX Design</h1>
                  <img
                    className="project-image"
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                </div>
              </div>
              <div className="project-card">
                <div className="content">
                  <p className="project-category">Mobile Application</p>
                  <h1 className="project-name">Mobile Application</h1>
                  <img
                    className="project-image"
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                </div>
              </div>
              <div className="project-card">
                <div className="content">
                  <p className="project-category">Web Application</p>
                  <h1 className="project-name">Web Application</h1>
                  <img
                    className="project-image"
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                </div>
              </div>
              <div className="project-card">
                <div className="content">
                  <p className="project-category">Backend Service</p>
                  <h1 className="project-name">Backend Service</h1>
                  <img
                    className="project-image"
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <CloudAnimation /> */}
    </>
  );
};

export default Projects;
