import React from "react"
import "./style.css"
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import headshot from './images/DSC02574.JPG'
import Hero from '../Hero/index'


const About = () => {


    return (
        <Container className="aboutContainer" >


            <NavDropdown classname="navDrop" title="Take a look around" id="basic-nav-dropdown">
                <NavDropdown.Item href="#photography">Photography</NavDropdown.Item>
                <NavDropdown.Item href="">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>

            <Row>
                <Col>
                    <img className="aboutImage" src={headshot} />
                </Col>
                <Col>
                    <Row>
                        <h2 className="aboutTitle">
                            About
                        </h2>
                    </Row>
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