import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import icon01 from "../assets/image/fastapi-icon-512x512-a7ggfxfw.png"
import icon02 from "../assets/image/icons8-css-400.png"
import icon03 from "../assets/image/icons8-django.svg"
import icon04 from "../assets/image/icons8-docker-240.png"
import icon05 from "../assets/image/icons8-html-480.png"
import icon06 from "../assets/image/icons8-javascript-480.png"
import icon07 from "../assets/image/icons8-postgresql-480.png"
import icon08 from "../assets/image/icons8-python-480.png"
import icon09 from "../assets/image/icons8-react-480.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon05} alt="html" /></a>
                                    </div>
                                    <h5>HTML5</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon02} alt="css" /></a>
                                    </div>
                                    <h5>CSS</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon03} alt="django" /></a>
                                    </div>
                                    <h5>Django</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon04} alt="docker" /></a>
                                    </div>
                                    <h5>Docker</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon06} alt="javascript" /></a>
                                    </div>
                                    <h5>Javascript</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon07} alt="postgresql" /></a>
                                    </div>
                                    <h5>PostgreSQL</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon08} alt="python" /></a>
                                    </div>
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon09} alt="react" /></a>
                                    </div>
                                    <h5>React</h5>
                                </div>

                                <div className="item">
                                    <div className="social-icon-ca">
                                    <a><img src={icon01} alt="fastapi" /></a>
                                    </div>
                                    <h5>FastAPI</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
