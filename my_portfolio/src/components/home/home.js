import { Col, Container, Row, Button } from "react-bootstrap";
import './home.scss';
import gridImg from '../assets/images/download.png'
import shapeImg from '../assets/images/shape.png'
import manImg from '../assets/images/man.png'
import blobImg from '../assets/images/blob.png'
import codeImg from '../assets/images/code.png'
import htmlImg from '../assets/images/html.png'
import reactImg from '../assets/images/react.png'

const Home = () => {
    return (
        <main className="home_container">
            <section className="hero">
                <img className="grid_img" src={gridImg} alt="grid image" />
                <img className="shape_img" src={shapeImg} alt="shape image" />
                <img className="man_img" src={manImg} alt="man image" />
                <img className="blob_img" src={blobImg} alt="blob image" />
                <img className="code_img" src={codeImg} alt="code image" />
                <img className="html_img" src={htmlImg} alt="html image" />
                <img className="react_img" src={reactImg} alt="react image" />
                <Container className="hero_text">  
                    <Row>
                        <Col md={6}>
                            {/* <Container className="me-auto ms-auto"> */}
                                <h5 className="stack_badge">Front-End Developer</h5>

                                <h1 className="hero_lg_text">Talking is cheap. <br /> Show me the code</h1>

                                <p className="mt-4 text-muted fs-5">
                                    I design and code beautifully simple things, <br />
                                    and I love what I do.
                                </p>

                                <Button variant="dark" className="mt-4">Let's talk</Button>
                            {/* </Container> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Home;