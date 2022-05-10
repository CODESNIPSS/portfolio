import { Col } from 'react-bootstrap'
import { dataObject, myHobbies } from '../data/serviceData'

const Passion = () => {
    return (
        <Col md={6} data-aos="fade-up"
        data-aos-duration="2000">
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
    )
}

export default Passion;