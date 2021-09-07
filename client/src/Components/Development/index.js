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
                                <Col className=' col-lg-8 imgColumn'>
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
                            <Col className='d-flex webTechnologies'>
                                <Col className="webTech">

                                    <h3 className='techTitle'>Technologies</h3>

                                    <div className='techList'>

                                        {web.teches && web.teches.map((tech, i) =>

                                            <p key={i} className="col col-6 col-lg-3">{tech.name}</p>

                                        )}


                                    </div>
                                </Col >
                                {web.features.length > 0 &&
                                
                                    <Col className='webFeat col-6'>
                                        <h3 className='featTitle'> Group Project</h3>
                                        <p className='featSubTitle'>Features I worked on</p>
                                        <div className='techList'>
                                        {web.features.map((feat,i) => 
                                        <p key={i} className="col col-6 col-lg-4"> {feat.name}</p>

                                        )}
                                        </div>
                                    </Col>
                                }

                            </Col>


                        </Carousel.Item>
                    )}



                </Carousel>
            </Row>
        </Container>

    )
}

export default WebDev;