import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css"
import Passion from './passion';
import Tech from './tech';

const Intro = ()=> {
    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    }, [] )

    return (
        <section className="about_services">
            <Container >
                <Row>
                   <Passion />
                    <Tech />
                </Row>
            </Container>
        </section>
    )
}

export default Intro;