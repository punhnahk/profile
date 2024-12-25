import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bookStore from "../../Assets/Projects/bookStore.png";
import noelTechshop from "../../Assets/Projects/noelTechshop.jpg";
import studentContributions from "../../Assets/Projects/studentContributions.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="container">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="home-about-body" style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="row" style={{ paddingBottom: "20px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noelTechshop}
              isBlog={false}
              title="Noel Techshop"
              description="Developed and deployed an e-commerce platform for electronics sales. Improved user experience by 30% with responsive design and optimized back-end. Technologies used include ReactJS, Tailwind CSS, Node.js, ExpressJS, and MongoDB."
              ghLink="https://github.com/punhnahk/final"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookStore}
              isBlog={false}
              title="Book Store Website"
              description="Built an equipment lending and management platform. Enhanced efficiency by 30% with clean coding practices and a scalable .NET-based framework. Focused on user authentication and role-based access management."
              ghLink="https://github.com/punhnahk/Selling-Book-MVC"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentContributions}
              isBlog={false}
              title="Website for Collecting Student Contributions"
              description="Developed a platform to manage student journals and contributions. Improved submission support by 15% using responsive design and robust .NET back-end architecture."
              ghLink="https://github.com/COMP1640-Greenwich/Enterprise-Web-Development_1640"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
