import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is <b className="purple">Batuhan Bartu BEBEK</b> and I’m a frontend developer with a background in bioengineering.
              <br />
              <br />
              I discovered my passion for <b className="purple">software development</b> during university and turned it into a career. Through Workintech’s full stack program, I specialized in modern frontend technologies.
              <br />
              <br />
              I'm skilled in
              <i>
                <b className="purple"> React.js, Tailwind CSS, JavaScript</b>
              </i>{" "}
              and have experience with
              <i>
                <b className="purple"> Java, Spring Boot, Node.js, and PostgreSQL</b>
              </i>.
              <br />
              <br />
              My interests lie in building dynamic, user-friendly web applications, solving real-world problems with <b className="purple">clean UI/UX design</b>, and delivering creative software solutions.
              <br />
              <br />
              I'm also enthusiastic about <b className="purple">entrepreneurship</b>, having patented a medical product and led several projects from design to launch.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/batuwankenobi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/batuhan-bartu-bebek/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
