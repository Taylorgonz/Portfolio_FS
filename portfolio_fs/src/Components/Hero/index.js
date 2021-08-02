import React from "react"
import "./style.css"
import { Container } from "react-bootstrap";
import Navbar from "../NavBar/index"


const Hero = () => {


    return (
        <Container className="p-0" fluid={true}>

            <div className="heroImg">
                <Navbar/>
                <h1 className="heroText"> Web Developer / Photographer </h1>

            </div>

           
        </Container>
    )
}


export default Hero;