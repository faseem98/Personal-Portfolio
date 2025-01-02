import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2021 - DEC 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            CAPGEMINI TECHNOLOGY SERVICES INDIA
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Frontend Developer
          </h6>
          <p>• Worked with a team of developers to build responsive web applications for clients.</p>
          <p>• Expertise in front-end technologies like React, JavaScript, TypeScript, Redux.</p>
          <p>• Adapted to AGILE/SCRUM environment, delivering iterative and high-quality software solutions</p>
          <p>• Utilized best coding practices to develop UI applications with high performance.</p>
          <p>• Mentored junior developers, enabling them to achieve professional growth and personal goals</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="DEC 2024 - Till Date"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            TATA CONSULTANCY SERVICES(TCS)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Frontend Engineer
          </h6>
          <p>• Design and implement advanced UI features and interactive components using React and modern JavaScript (ES6+).</p>
          <p>• Work closely with UI/UX designers, backend developers, and product managers to ensure that application features meet business and user needs.</p>
          <p>• Integrate and consume RESTful and GraphQL APIs for dynamic data rendering and interactive content.</p>
          <p>• Troubleshoot and resolve frontend bugs, ensuring smooth user experiences and high-quality application delivery.</p>
          <p>• Maintain clear and comprehensive documentation for code, components, and processes to assist other developers and stakeholders.</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
