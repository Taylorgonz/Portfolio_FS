import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col, Carousel, Accordion, AccordionCollapse, AccordionToggle, Card } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'



const WebDev = ({ setModalMain }) => {

    const [webDev, setWebDev] = useState([]);
    const [webDevSelect, setWebDevSelect] = useState('')




    const getWebsites = () => {
        axios.get('/api/websites')
            .then(res => {
                setWebDevSelect(res.data[0])
                setWebDev(res.data)

            })
            .catch(err => setWebDev([err]));
    }

    const changePlusMinus = (e) => {
        if (e.target.previousSibling.innerHTML == "+") {
            e.target.previousSibling.innerHTML = '-'
        }
        else {
            e.target.previousSibling.innerHTML = '+'
        }
    }


    useEffect(() => {
        if (webDev.length === 0) getWebsites();
    })

    console.log(webDev)


    return (
        <Container fluid={true} id="WebDev" className='webDevContainer'>
            <h1 className="webDevTitle"> Web Development </h1>

            <Row>
                <div prevLabel='prev' className="carouselWebStyle">

                    <div className="carouselWebItem">
                        <div className='carouselStylingWeb'>
                            <Col lg='7' xs='12' className='imgColumn'>
                                {/* <div className="webOverlay col-lg-8" /> */}
                                <img className="WebDevImages" onClick={() => {
                                    setModalMain(webDevSelect.image)
                                }
                                    } src={webDevSelect.image} />
                            </Col>
                            <Col lg='3' xs="12" className=' webAppInfo'>
                                <h2 className="projectTitle">{webDevSelect.title}</h2>
                                <div className="descriptionWrap">
                                    <p className="webAppDesc">{webDevSelect.description}</p>
                                </div>
                                <ul className='webAppLinks'>
                                    <li><a target='_blank' href={webDevSelect.url}>Site Link</a></li>
                                    <li><a target='_blank' href={webDevSelect.github_url}>Github</a></li>

                                </ul>
                            </Col>
                        </div>

                        <Accordion className="accordion ">
                            <Card className='accordionCard'>
                                <Accordion.Collapse eventKey='0' className='techlist'>
                                    <Card.Body className="techBody">

                                        {webDevSelect.teches && webDevSelect.teches.map((tech, i) =>
                                            <p key={i} className="techItem ml-auto mr-auto col col-6 col-lg-3"> <span class="dot"> </span> {tech.name}</p>
                                        )}

                                    </Card.Body>

                                </Accordion.Collapse>
                                <Card.Header onClick={(e) => changePlusMinus(e)} className="accordionHeader">
                                    <span className='plusMinus'>+</span>
                                    <AccordionToggle eventKey='0' className='techTitle w-100'> Technologies</AccordionToggle>
                                </Card.Header>
                            </Card>
                            {webDevSelect !== '' &&
                                <>
                                    {webDevSelect.features.length > 0 &&

                                        <Card className="groupCard">
                                            <AccordionCollapse eventKey='1' className="" >
                                                <Card.Body className="techBody">
                                                    {webDevSelect.features.map((feat, i) =>
                                                        <p key={i} className="techItem ml-auto mr-auto col col-6 col-lg-2"> <span class="dot"> </span> {feat.name}</p>
                                                    )}
                                                </Card.Body>

                                            </AccordionCollapse>
                                            <Card.Header onClick={(e) => changePlusMinus(e)} className="accordionHeader">
                                                <span className="plusMinus">+</span>
                                                <AccordionToggle eventKey='1' className='featTitle'> Group Project</AccordionToggle>
                                            </Card.Header>
                                        </Card>
                                    }
                                </>
                            }
                        </Accordion>



                    </div>
                    <div className="projectSelector">
                        <h2 className="devProjectsTitle">Projects</h2>
                        <div className="carouselSelectorWrap">
                            {webDev.map((web, i) =>
                                <div>
                             
                                    <p className="carouselTitle">{web.title}</p>
                                    <img onClick={() => setWebDevSelect(web)} className="carouselSelector " src={web.image} />
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </Row>
        </Container>

    )
}

export default WebDev;