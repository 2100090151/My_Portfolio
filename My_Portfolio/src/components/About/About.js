import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <h1 className="project-heading" style={{ marginTop: "50px" , marginBottom: "50px"}}>
          Education <strong className="purple">Background</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={6}>
            <li><h2>Bachelor's Of Technology Computer Science and Information Technology.</h2></li>
            <p>CGPA : 9.57</p>
            <p>KL University, Guntur, Andhra Pradesh, India. 2021 - 2025</p>
          </Col>
          <Col md={6}>
            <li><h2>Bachelor of Business Administration - BBA (Online).</h2></li>
            <p>CGPA : 9.05</p>
            <p>KL University, Guntur, Andhra Pradesh, India. 2022 - 2025</p>
          </Col>
          <Col md={6}>
            <li><h2>Board of Intermediate Education - 12th Standard.</h2></li>
            <p>CGPA : 8.5</p>
            <p>Sri Chaitanya Jr. College, Vijayawada, Andhra Pradesh, India. 2019 - 2021</p>
          </Col>
          <Col md={6}>
            <li><h2>Board Of Secondary Education - 10th Standard.</h2></li>
            <p>CGPA : 9.7</p>
            <p>St. John’s English Medium School, Vijayawada, Andhra Pradesh, India. 2018 - 2019</p>
          </Col>
        </Row>
        <h1 className="project-heading" style={{ marginTop: "50px" , marginBottom: "50px"}}>
          Intership <strong className="purple">Background</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={6}>
            <li><h2>AICTE: AI-ML Virtual Internship.</h2></li>
            <p>Virtual 05/2023 - 07/2023</p>
          </Col>
          <Col md={6}>
            <li><h2>Quantum Learnings: AI & ML with DataScience.</h2></li>
            <p>Virtual 02/2023 - 04/2023</p>
          </Col>
          <Col md={6}>
            <li><h2>Skolar: ML Virtual Internship.</h2></li>
            <p>Virtual 01/2023 - 04/2023</p>
          </Col>
          <Col md={6}>
            <li><h2>Skill-Lync: Data Science & Data Analytics Student Intern.</h2></li>
            <p>Virtual 01/2023 - Present</p>
          </Col>
        </Row>

        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          Professional <strong className="purple">Skillset</strong>
        </h1>
        
        <Techstack />

        <h1 className="project-heading" style={{ marginTop: "50px" }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
