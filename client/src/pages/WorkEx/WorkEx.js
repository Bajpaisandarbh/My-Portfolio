import React from "react";
import "./WorkEx.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";

const WorkEx = () => {
  return (
    <>
      <div className="work" id="exp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="5 May 2024 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<BsPersonWorkspace />}
            >
              <h3 className="vertical-timeline-element-title">
                Intern at Indibus
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Delhi</h4>
              <p>
                Website Development , App Developement and Customized Software
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="26 March 2024 - 4 April 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">SwiftAid</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hack It Sapiens Hackathon ,Jaipur
              </h4>
              <p>
                A react based web app providing fast and reliable health
                services
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkEx;
