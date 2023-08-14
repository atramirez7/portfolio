import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import header from "../assets/image/dreamhead.png"
import { useState, useEffect } from "react"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer", "Full Stack Engineer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`Hi I'm Dream `}<span className="wrap">{text}</span></h1>
                        <p className="text-left">Driven by a relentless desire for growth and self-improvement,
                            I am a motivated self-starter and perpetual learner.
                            Each day, I am committed to evolving into a better version of
                            myself than I was yesterday. With a diverse background encompassing
                            non-profit, higher education, and social service sectors, my journey has equipped me with valuable skills and experiences that
                        I am eager to channel into the world of technology. I've honed my ability to adapt quickly, collaborate effectively, and
                        communicate with diverse teams. These attributes, combined with my passion for
                        problem-solving and innovative thinking, drive my pursuit of a career in
                        software engineering. </p>


                        <button onClick={(e) => {
                            window.location.href = "mailto:apitchayatramirez@gmail.com";
                            e.preventDefault();
                            }}>
                            Let's connect <ArrowRightCircle size={25} />
                            </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt="header" id="headerlogo"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
