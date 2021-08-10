import React from "react"
import "./style.css"
import { Container } from "react-bootstrap";
import Navbar from "../NavBar/index"


const Hero = () => {


    return (
        <Container className="p-0" fluid={true}>

            <div className="heroImg">
                <Navbar />
                <Container className='p-0 heroContainer' >
                    <h1 className="heroText"> Designer </h1>
                    <h1 className="heroText"> Photographer </h1>
                    <h1 className="heroText"> Web Developer </h1>

                </Container>

            </div>


        </Container>
    )
}


export default Hero;