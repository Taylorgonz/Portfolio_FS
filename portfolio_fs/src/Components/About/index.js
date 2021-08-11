import React from "react"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import headshot from './images/DSC02574.JPG'


const About = () => {


    return (
        <Container className="aboutContainer" fluid={true}>
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
                        <p>
                            California born, 
                        </p>
                    </Row>
                </Col>
                
            </Row>
        </Container>
    )
}

export default About;