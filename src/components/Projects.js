import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import img1 from "../assets/image/NN1.png"
import img2 from "../assets/image/NN2.png"
import img3 from "../assets/image/NN3.png"
import img4 from "../assets/image/WC1.png"
import img5 from "../assets/image/WC2.png"
import img6 from "../assets/image/WC3.png"
import img7 from "../assets/image/PA1.png"
import img8 from "../assets/image/PA2.png"
import img9 from "../assets/image/PA3.png"

export const Projects = () => {
    const projects = [
        {
            title: "Novice Network",
            description: "A groundbreaking social media platform designed exclusively for coding bootcamp graduates to connect, collaborate, and grow together.",
            imgUrl: img1,
            url: "https://double07.gitlab.io/novice-network",
        },
        {
            title: "Novice Network",
            description: "Through dedicated career support features, members can access job postings",
            imgUrl: img3,
            url: "https://double07.gitlab.io/novice-network",
        },
        {
            title: "Novice Network",
            description: "FastAPI, React, Bootstrap, PostgreSQL",
            imgUrl: img2,
            url: "https://double07.gitlab.io/novice-network",
        },
        {
            title: "We Catered",
            description: "The Catering Management Web Application is a comprehensive solution designed to streamline and enhance the catering business process.",
            imgUrl: img4,
            url: "https://github.com/atramirez7/we-catered",
        },
        {
            title: "We Catered",
            description: "It offers a user-friendly platform that facilitates efficient order placement and menu management for both customers and vendors.",
            imgUrl: img5,
            url: "https://github.com/atramirez7/we-catered",
        },
        {
            title: "We Catered",
            description: "Built on Django framework, CSS, Bootstrap",
            imgUrl: img6,
            url: "https://github.com/atramirez7/we-catered",
        },
        {
            title: "PrimeAuto",
            description: "A comprehensive application that streamlined the management of vehicles, appointments, and sales within the dealership environment",
            imgUrl: img7,
            url: "https://github.com/atramirez7/primeauto",
        },
        {
            title: "PrimeAuto",
            description: "One pivotal aspect of this project was the implementation of RESTful APIs and pollers within the Django framework. This integration facilitated the seamless flow of crucial information, allowing users to access real-time updates about cars, appointments, and sales.",
            imgUrl: img8,
            url: "https://github.com/atramirez7/primeauto",
        },
        {
            title: "PrimeAuto",
            description: "React, Bootstrap 5, Django, and RESTful APIs",
            imgUrl: img9,
            url: "https://github.com/atramirez7/primeauto",
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <section>
                    <Row>
                        {projects.map((project, index) => {
                            return (
                            <ProjectCard
                                key={index}
                                {...project}
                             />
                            )
                        })}

                    </Row>
                    </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
