import { Col, Row } from "react-bootstrap"
import { skills } from "../data/serviceData";
import { myTechSkills } from "../data/techLang";

const Tech = ()=> {
    return (
        <Col md={6} className="pe-5 h-100" data-aos="fade-up"
            data-aos-duration="2000">
            <h5 className='text-muted'>
                { skills.smallHeading }
            </h5>

            <h1 className='about_lg_text'>
                { skills.largeHeading }
            </h1>

            <h4>
                <i>
                    { skills.italicText }
                </i>
            </h4>

            <Row>
                <Col>
                    <h5 className="text-muted">Coding languages</h5>

                    { myTechSkills.techLangs.map((data, index) => {
                        return (
                            <div className="text-muted fs-5 mt-3" key={index}>
                                { data.skills }
                            </div>
                        )
                    } ) }
                </Col>

                <Col>
                    <h5 className="text-muted">Frameworks, libraries & tools</h5>
                    
                    {myTechSkills.frameWorks.map((data, index) => {
                        return (
                            <div className="text-muted fs-5 mt-3" key={index}>
                                { data.skills }
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Col>
    )
}

export default Tech;