import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/movie.jpg";
import emotion from "../../Assets/Projects/witflix.jpg";
import editor from "../../Assets/Projects/redux.jpeg";
import chatify from "../../Assets/Projects/myshop.jpg";
import suicide from "../../Assets/Projects/twitter.jpg";
import bitsOfCode from "../../Assets/Projects/pizza.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="My Shop E-commerce"
              description="This project uses modern technologies like React, Tailwind CSS, and various APIs to create a smooth e-commerce experience. Users can browse products, read reviews, add items to their cart, and complete free transactions. They can also make payments, manage invoices and shipping addresses, save credit cards, and use a ‘Remember Me’ login option. Email confirmation is sent upon registration, and users can filter products and add favorites. The focus is on delivering a clean, user-friendly shopping experience."
              ghLink="https://github.com/batuwankenobi/my-shop"
              demoLink="https://unser-shop.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pizza Order App"
              description="This Pizza Order React project features a responsive and user-friendly interface where users can customize pizzas by selecting sizes and toppings with dynamic price updates. It includes real-time form validation, order summaries, and confirmation screens. Built with React, JavaScript, and CSS, the app showcases skills in state management and UX design to deliver a smooth and engaging ordering experience."
              ghLink="https://github.com/batuwankenobi/pizza-order-react-project"
              demoLink="https://pizza-time-to.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="IMDB Movie Database"
              description="This IMDb Movie Database project is a sleek web app that lets users search, browse, and explore detailed information about movies. Built with React and modern web technologies, it features dynamic search, responsive design, and an intuitive interface to deliver a smooth and engaging movie discovery experience.
            "
              ghLink="https://github.com/batuwankenobi/IMDB-movie-database"
              demoLink="https://imdb-movie-database.vercel.app/movies"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Movie Selector"
              description="This Movie Selector app helps users find movies quickly and easily with a clean, simple interface. Built with React, it features efficient search and filtering options to provide a fast and enjoyable movie browsing experience.
"
              ghLink="https://github.com/batuwankenobi/movie-selector"
              demoLink="https://movie-selector-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Kwitter"
              description="This full-stack Kwitter app allows users to post messages, follow others, and engage in real-time conversations. Built with modern web technologies, it offers a clean and responsive interface for a smooth social experience."
              ghLink="https://github.com/batuwankenobi/kwitter-full-stack"
              demoLink="https://kwitter-full-stack.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Witflix"
              description="Witflix is a sleek movie streaming platform that lets users browse, search, and watch trailers of popular films. Built with React and modern web tools, it provides a smooth, responsive, and engaging user experience."
              ghLink="https://github.com/batuwankenobi/witflix-master"
              demoLink="https://witflix-master.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
