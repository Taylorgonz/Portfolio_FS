import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col, Carousel } from "react-bootstrap";
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
                <Carousel className="carouselWebStyle">
                    {webDev.map((web, i) =>
                        <Carousel.Item key={i} className="carouselWebItem">
                            <div className='carouselStylingWeb'>
                                <Col  className=' col-lg-8 imgColumn'>
                                    <img className="WebDevImages" onClick={() => setModalImage(web.image)} src={web.image} />
                                </Col>
                                <Col className='col-lg-4 webAppInfo'>
                                    <h2 className="projectTitle">{web.title}</h2>
                                    <p className="webAppDesc">{web.description}</p>
                                    <ul className='webAppLinks'>
                                        <li><a target='_blank' href={web.url}>Site Link</a></li>
                                        <li><a target='_blank' href={web.github_url}>Github</a></li>

                                    </ul>
                                </Col>
                            </div>
                            <Col className=' webTechnologies'>
                                <h3 className='techTitle'>Technologies</h3>
                                <Row>
                                <ul className='techList'>
                                    <Col className='col-3'>
                                    <li>React</li>
                                    </Col>
                                    <Col className='col-3'>
                                    <li>React</li>
                                    </Col>
                                    <Col className='col-3'>
                                    <li>React</li>
                                    </Col>
                                    <Col className='col-3'>
                                    <li>React</li>
                                    </Col>
                                    <Col className='col-3'>
                                    <li>React</li>
                                    </Col>
                                    <Col className='col-3'>
                                    <li>React</li>
                                    </Col>
                                    

                                </ul>
                                </Row>
                            </Col>

                        </Carousel.Item>
                    )}



                </Carousel>
            </Row>
        </Container>

    )
}

export default WebDev;