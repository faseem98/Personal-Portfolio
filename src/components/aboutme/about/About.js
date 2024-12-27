import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../../DisplayLottie";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            <GreetingLottie animationPath="/lottie/coding.json" />

            <Slide left>
              {/* <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player> */}
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Faseem Ahmed </b>
                and I am currently working as a{" "}
                <b className="purple">Frontend Engineer </b>
                in <b className="purple">Tata Consultancy Services(TCS) </b>
                in Chennai, India.
                <br />
                <br />I hold an engineering degree in{" "}
                <b className="purple">Computer Science </b> and I have
                experience working with frameworks and libraries such as &nbsp;
                <b className="purple">
                  {" "}
                  ReactJS, NextJS, NodeJS, Redux, JEST.{" "}
                </b>
                <br />
                <br />
                I'm also proficient in programming languages like &nbsp;
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, HTML, CSS, Java, C++, MySQL.{" "}
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
                <br />
                <br />
                In my leisure time, I enjoy learning new technologies and &nbsp;
                <b className="purple">
                  building new web technologies and also post tech content in my Linkedin page{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
