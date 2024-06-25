import React from "react";
import "./Projects.css";
import Tada from "react-reveal/Tada";
const Projects = () => {
  return (
    <>
      <div className="container project" id="Projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top 3 recent projects with live links and source code.
        </p>
        {"Card Design"}
        <div className="row" id="ads">
          <Tada>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front End</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvssbmosdeLs9f1cwQ2WgP258t-d49C9J-w&s"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Stone Paper Scissors Project
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Bajpaisandarbh/Stone-Paper-scissors"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front End</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHZI3pcG2mPhUiTMaQN41e0B5HLi9hAONLg&s"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">SCSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">The Home Decor</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Bajpaisandarbh/Frontend_Project"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://www.nmdc.co.in/cms-admin/Upload/Spotlight_Images/a2882ead9ecb425aa3f660e6c8da7e6d_20231006181925980.jpg"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      1930 Helpline Number Project
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Bajpaisandarbh/RJPOLICE_TEAM_HACKSTORMERS"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Tada>
        </div>
      </div>
    </>
  );
};

export default Projects;
