import React, { useEffect } from 'react'
import { dataObject, myHobbies, services } from '../data/serviceData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css"

const Intro = ()=> {
    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    }, [] )

    return (
        <section className="about_services">
            <Container data-aos="fade-up"
                        data-aos-duration="2000">
                <Row>
                    <Col md={6} className="mt-5 pe-5">
                        {services.map((data, index) => {
                            return (
                                <Card className='bg-light rounded rounded-3 p-3 border-0 mb-3' key={index}>
                                    <Card.Body>
                                        <Card.Title>
                                            <h1 className='fw-bold'>
                                                { data.heading }
                                            </h1>
                                        </Card.Title>

                                        <Card.Text className='fs-5 text-muted'>
                                            { data.text }


                                            <div className='mt-3'>
                                                { data.projectsAcc }
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
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

                            {myHobbies.map((myData, index) => {
                                return (
                                    <span className='text-dark' key={index}>
                                        { myData.hobbies }
                                    </span>
                                )
                            })}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Intro;