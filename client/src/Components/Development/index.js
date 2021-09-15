import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col, Carousel, Accordion, AccordionCollapse, AccordionToggle, Card } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'



const WebDev = ({ setModalImage }) => {

    const [webDev, setWebDev] = useState([]);


    const getWebsites = () => {
        axios.get('/api/websites')
            .then(res => setWebDev(res.data))
            .catch(err => setWebDev([err]));
    }


    useEffect(() => {
        if (webDev.length === 0) getWebsites();
    })




    return (
        <Container fluid={true} id="WebDev" className='webDevContainer'>
            <h1 className="webDevTitle"> Web Development </h1>

            <Row>
                <Carousel prevLabel='prev' className="carouselWebStyle">
                    {webDev.map((web, i) =>
                        <Carousel.Item key={i} className="carouselWebItem">
                            <div className='carouselStylingWeb'>
                                <Col className=' col-lg-8 imgColumn'>
                                    <div className="webOverlay col-lg-8" />
                                    <img className="WebDevImages" onClick={() => setModalImage(web.image)} src={web.image} />
                                </Col>
                                <Col className='col-lg-4 webAppInfo'>
                                    <h2 className="projectTitle">{web.title}</h2>
                                    <div className="descriptionWrap">
                                        <p className="webAppDesc">{web.description}</p>
                                    </div>
                                    <ul className='webAppLinks'>
                                        <li><a target='_blank' href={web.url}>Site Link</a></li>
                                        <li><a target='_blank' href={web.github_url}>Github</a></li>

                                    </ul>
                                </Col>
                            </div>

                            <Accordion className="accordion w-100">
                                <Card className='accordionCard'>
                                    <Card.Header className="accordionHeader">
                                        <AccordionToggle eventKey='0' className='techTitle w-100'>Technologies</AccordionToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='0' className='techlist'>
                                        <Card.Body className="techBody">


                                            {web.teches.length > 0 && web.teches.map((tech, i) =>
                                                <p key={i} className="techItem col col-6 col-lg-3">{tech.name}</p>
                                            )}
                                        </Card.Body>

                                    </Accordion.Collapse>
                                </Card>

                                {web.features.length > 0 &&

                                    <Card>
                                        <Card.Header>
                                            <AccordionToggle eventKey='1' className='featTitle'> Group Project</AccordionToggle>
                                        </Card.Header>
                                        <AccordionCollapse eventKey='1' className="" >
                                            <Card.Body className="techBody">
                                                <p className='featSubTitle'>Features I worked on</p>
                                                {web.features.map((feat, i) =>
                                                    <p key={i} className="techItem col col-6 col-lg-4"> {feat.name}</p>
                                                )}
                                            </Card.Body>

                                        </AccordionCollapse>
                                    </Card>
                                }
                            </Accordion>



                        </Carousel.Item>
                    )}



                </Carousel>
            </Row>
        </Container>

    )
}

export default WebDev;