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



    return (
        <Container fluid={true} id="WebDev" className='webDevContainer'>
            <h1 className="webDevTitle"> Web Development </h1>


            <div prevLabel='prev' className="webDevWrapper">
                <div className="projectSelector">
                    <h2 className="devProjectsTitle">Projects</h2>
                    <div className="carouselSelectorWrap">
                        {webDev.map((web, i) =>
                            <div className="imageWrap">

                                <p className="carouselTitle">{web.title}</p>
                                <img onClick={() => setWebDevSelect(web)} className="carouselSelector " src={web.image} />
                            </div>
                        )}
                    </div>

                </div>

                <div className="webDevMainDisplay">
                    <div className='carouselStylingWeb'>
                        <Col lg='7' xs='12' className='imgColumn'>
                            <img className="WebDevImages" onClick={() => {
                                setModalMain(webDevSelect.image)
                            }
                            } src={webDevSelect.image} />
                        </Col>
                        <Col lg='3' xs="12" className=' webAppInfo'>
                            <h2 className="projectTitle">{webDevSelect.title}</h2>
                            <div className="descriptionWrap">
                                <p className="webAppDesc">{webDevSelect.description}</p>
                                {webDevSelect &&
                                    <>
                                            <div className="groupProjectWrapper">
                                                <hr />
                                                <h3 className="groupProjectTitle">Technologies</h3>
                                                <ul className="groupProjectList">
                                                    {webDevSelect.teches.map((tech, i) =>
                                                        <li key={i} className="groupProjectItem">{tech.name}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        {webDevSelect.features[0] &&

                                            <div className="groupProjectWrapper">
                                                <hr />
                                                <h3 className="groupProjectTitle">group project:</h3>
                                                <p className="groupProjectSubtitle">(features I worked on)</p>
                                                <ul className="groupProjectList">
                                                    {webDevSelect.features.map((feat, i) =>
                                                        <li key={i} className="groupProjectItem">{feat.name}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                            <ul className='webAppLinks'>
                                <li><a target='_blank' href={webDevSelect.url}>Site Link</a></li>
                                <li><a target='_blank' href={webDevSelect.github_url}>Github</a></li>

                            </ul>
                        </Col>
                    </div>
                </div>


            </div>
        </Container>

    )
}

export default WebDev;