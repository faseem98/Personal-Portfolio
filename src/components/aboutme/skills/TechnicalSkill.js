import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalskill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tech Stack</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">        
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="NextJS" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i class="devicon-express-original"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="MUI" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MYSQL" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
