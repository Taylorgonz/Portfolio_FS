import React from "react"
import "./style.css"
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import headshot from './images/DSC02574.JPG'
import Hero from '../Hero/index'


const About = () => {


    return (
        <Container fluid={true} className="aboutContainer" >

            <h1 id="About" className="aboutTitle">
                About
            </h1>

            <div className=" aboutRow mb-auto d-flex">
                
                <div className="aboutDiv">
                   
                    <img className="aboutImage" src={headshot} />
                        <p className='aboutParagraph'>
                            Portland, Maine based Photographer, Web Developer, and Logo Designer. Lover of good design, saturated sunsets, and all things nature.
                          
                        </p>
                    
                </div>

            </div>
        </Container>
    )
}

export default About;