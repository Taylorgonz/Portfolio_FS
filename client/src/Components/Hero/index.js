import React from "react"
import "./style.css"
import { Container } from "react-bootstrap";



const Hero = () => {


    return (
        <Container id="heroTop" className="p-0" fluid={true}>

            <div className="heroImg">
                {/* <h1 className="heroTitle">TaylorGonz</h1> */}
                <Container className='p-0 heroContainer' >
                    <h1 className="heroTitle"> Taylor Gonz </h1>
                    <div className='titleUnderline'></div>
                    <h1 className="heroText"> Designer </h1>
                    <h1 className="heroText"> Photographer </h1>
                    <h1 className="heroText"> Web Developer </h1>

                </Container>
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>

            </div>


        </Container>
    )
}


export default Hero;