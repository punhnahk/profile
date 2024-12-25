import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Phung Khanh </span>
            from <span className="purple"> Vietnam.</span>
            <br />
            I am an IT student at the University of Greenwich Vietnam.
            <br />
            Skilled in C#, .NET Core, ASP.NET, and ReactJS, I specialize in
            creating scalable and user-friendly web applications using ReactJS.
            <br />
            <br />I am passionate about innovation, performance, and quality,
            and committed to continuous learning and teamwork to deliver
            impactful software solutions aligned with modern industry practices.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Le vent se lève, il faut tenter de vivre."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
