import React from 'react'
import { dataObject } from '../data/serviceData';
import { Container, Row, Col } from 'react-bootstrap';

const Intro = ()=> {
    return (
        <section className="about_services">
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <h5 className="text-muted">
                            { dataObject.smallHeadingText }
                        </h5>

                        <h1 className='about_lg_text'>
                            { dataObject.largeHeadingText }
                        </h1>

                        <h4>
                            <i>
                                { dataObject.italicText }
                            </i>
                        </h4>

                        <p className='mt-4 text-muted fs-5'>
                            { dataObject.paragraphText[0] }
                        </p>

                        <p className='mt-4 text-muted fs-5'>
                            { dataObject.paragraphText[1] }

                            <b>
                                { dataObject.hobbies[0] }
                            </b>,

                            <b>
                                { dataObject.hobbies[1] }
                            </b>,

                            <b>
                                { dataObject.hobbies[2] }
                            </b>,

                            <b>
                                { dataObject.hobbies[3] }
                            </b>,

                            <b>
                                { dataObject.hobbies[4] }
                            </b>,

                            <b>
                                { dataObject.hobbies[5] }
                            </b>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Intro;