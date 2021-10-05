import React from "react"
import "./style.css"
import { Container } from "react-bootstrap";
import headshot from './images/DSC02574.JPG'


const About = () => {


    return (
        <Container className="aboutContainer" >

            <h1 id="About" className="aboutTitle">
                About
            </h1>

            <div className=" aboutRow mb-auto d-flex">

                <div className="aboutDiv">

                    <img className="aboutImage" src={headshot} />
                    <p className='aboutParagraph'>
                        Hello,
                        <br />
                        <br />

I'm Taylor Gonzales, a Web Developer and Photographer based out of Portland Maine. Lover of good design, film photography, cabins in the woods, and all things animals.
<br />
                        <br />
I've had a camera in my hand most of my life. My mom's film camera, the old camcorder, those early digital point and shoots that seemed so ground breaking. Photography is my favorite way to document nostalgia, as someone who's so future focused photographs allow me to take time to slow down and enjoy some of my favorite memories. Most of my professional work revolves around coffee and branding. I spent 2 years as the social media manager at Bard Coffee in Portland and was able to learn to how to capture new moments in the same space, while also making it feel cohesive with consistent style.
<br />
                        <br />
During the Covid pandemic I made the decision to move from my career as a coffee professional and pursue web development. I enrolled in a 6 month coding bootcamp through the University of New Hampshire and received a certificate of completion, as well as gained a true passion for web development.
                        </p>

                </div>

            </div>
        </Container>
    )
}

export default About;