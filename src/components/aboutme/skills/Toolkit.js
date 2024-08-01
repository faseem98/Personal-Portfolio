import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import github from "../../../images/github.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
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
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt="github"
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" alt="Chrome" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" alt="Confluence" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" alt="Auth0" />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" alt="Sonar" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
