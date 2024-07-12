import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import train from "../../Assets/Projects/train.png";
import API from "../../Assets/Projects/API.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={train}
              isBlog={false}
              title="Ticket"
              description="A website for reserving train tickets online. Book your tickets conveniently and securely for your next train journey."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={API}
              isBlog={false}
              title="API"
              description="Developed a data entry web application using ASP.NET and Postman for efficient data management and communication between client and server."
            />
          </Col>



       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
