import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
              <img
                src="https://avatars.githubusercontent.com/u/118759857?v=4"
                alt="Profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis dignissimos repudiandae eveniet aspernatur nulla unde
                neque sit, modi soluta itaque quam molestias dolore impedit
                commodi est ea odio. Ullam, amet.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
