import React from "react"
import "./style.css"
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";



const Hero = () => {


    return (
        <Container id="heroTop" className="p-0" fluid={true}>

            <div className="heroImg">
                {/* <h1 className="heroTitle">TaylorGonz</h1> */}
                <Container fluid={true} className='p-0 heroContainer' >
                    <Navbar bg="" expand="lg">
                        <Container fluid={true}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="">
                                    <Nav.Link href="#About">About</Nav.Link>
                                    <Nav.Link href="#photography">Photography</Nav.Link>
                                    <Nav.Link href="#WebDev">Web Development</Nav.Link>
                                    <Nav.Link href="#link">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
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