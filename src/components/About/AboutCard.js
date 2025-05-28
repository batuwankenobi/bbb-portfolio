import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Batuhan Bartu BEBEK</span> from{" "}
            <span className="purple">Istanbul, TURKEY</span>.
            <br />
            I’m a Junior Full Stack Developer with a background in Bioengineering from Marmara University. My journey from science to software has sharpened my analytical thinking and fueled my passion for building innovative, user-centric web applications.
            <br />
            <br />
            I specialize in technologies like <span className="purple">React.js, Tailwind CSS, JavaScript</span> and also have experience in <span className="purple">Java, Spring Boot</span>, and modern development practices.
            <br />
            I’ve built e-commerce platforms, responsive portfolios, and interactive web apps, while also contributing to full stack projects during my time at Workintech.
            <br />
            <br />
            Outside of tech, I enjoy working on projects that combine <span className="purple">creativity, entrepreneurship, and impactful problem-solving</span>.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building responsive and scalable web applications with React and Tailwind CSS
            </li>
            <li className="about-activity">
              <ImPointRight /> Generating creative business ideas and product designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling, camping, and exploring new cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching and analyzing movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing and following American football & table tennis
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Programs must be written for people to read, and only incidentally for machines to execute."
          </p>
          <footer className="blockquote-footer"> Harold Abelson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
