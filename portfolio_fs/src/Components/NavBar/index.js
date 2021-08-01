import React from "react"
import "./style.css"
import { Nav, Navbar, Container } from "react-bootstrap";


const NavBar = () => {


    return (
        <Container className="p-0" >

            <Navbar className='Navbar navbar-light  navigation ' bg="transparent" expand="lg">
                <Navbar.Brand className='navbarTitle nav-fonts'><h1 className="navTitle">TaylorGonz</h1></Navbar.Brand>
                <div className="navButton-border">
                    <Navbar.Toggle id="navButton" className='navButton' aria-controls="navbar-toggle" />
                </div>
                <Navbar.Collapse className="navLinks" id="navbar-toggle">
                    <div className="navLinks">
                        <Nav className='linkNav leftLink'>
                            <h3> Photography </h3>
                        </Nav>
                        <Nav className='linkNav leftLink'>
                            <h3> Web Dev </h3>
                        </Nav>
                        <Nav className='linkNav'>
                            <h3> Contact</h3>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </Container>
    )
}


export default NavBar;