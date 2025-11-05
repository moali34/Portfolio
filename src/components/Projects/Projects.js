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
import learn from "../../Assets/Projects/learn.png";
import reserve from "../../Assets/Projects/reserve.png";
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

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={learn}
              isBlog={false}
              title="learn"
              description="An online store website. It contains two sections that are responsive."
              demoLink="https://sites.google.com/view/mohamedalitech/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8-%D9%88%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9"
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={reserve}
              isBlog={false}
              title="reserve"
              description="A restaurant reservation app allows diners to easily search for restaurants, and book reservations directly from their mobile device or web browser."
              demoLink="https://www.jotform.com/app/253082505011443"
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
