import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/image/DARlogo.png";
import icon1 from "../assets/image/icons8-linkedin.svg";
import icon2 from "../assets/image/icons8-github.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from "../assets/image/pdf/Apitchaya Resume 23-08-07.pdf"


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
                Home
                </Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>
                Skills
                </Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>
                Projects
                </Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/apitchayaramirez/"><img src={icon1} alt="linkedin" /></a>
                <a href="https://github.com/atramirez7"><img src={icon2} alt="github" /></a>
                </div>
                <a href={resume} download="apitchayaresume"><button className="vvd">
                    <span>Resume</span>
                </button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
