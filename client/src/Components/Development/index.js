import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col, Carousel } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'



const WebDev = ({ setModalImage }) => {



    return (
        <Container  className='webDevContainer'>
            <h1 className="webDevTitle"> Web Development </h1>

            <Row>
                <Carousel className="carouselWebStyle">

                    <Carousel.Item className="d-flex carouselWebItem" onClick={() => setModalImage()}>
                        <Col className='d-flex justify-content-center'>
                            <img className="WebDevImages" src='http://res.cloudinary.com/dgyo5rbhq/image/upload/v1630516807/q04whedi3cgc8gevfh1j.jpg' />
                        </Col>
                        <Col>
                        <h2 className="projectTitle">BikeCheck</h2>
                        <h3>Descritption</h3>
                        <p>a project that I mad to blah blah blah...</p>
                        </Col>
                    </Carousel.Item>


                </Carousel>
            </Row>
        </Container>

    )
}

export default WebDev;