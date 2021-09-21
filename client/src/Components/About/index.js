import React from "react"
import "./style.css"
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import headshot from './images/DSC02574.JPG'
import Hero from '../Hero/index'


const About = () => {


    return (
        <Container className="aboutContainer" >

            <h1 id="About" className="aboutTitle">
                About
            </h1>

            <Row className="mb-auto d-flex">
                <Col className="d-flex justify-content-center">
                    <img className="aboutImage" src={headshot} />
                </Col>
                <Col className="aboutDiv">
                    <Row>
                        <p >
                            Portland, Maine based Photographer, Web Developer, and Logo Designer. Lover of good design, saturated sunsets, and all things nature.
                        </p>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}

export default About;