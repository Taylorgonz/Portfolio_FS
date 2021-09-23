import React, { useState, useRef } from 'react'
import './style.css';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function Contact() {
    const subjectRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    
    return (
        <Container fluid={true} id='Contact' className='contactContainer'>
            <h1 className="contactTitle">Contact Me</h1>

            <Row className='d-flex justify-content-center'>
                <Col xs='11' lg='6' className='contactForm'>
                    <Form>
                            <h2 className='contactHeader'>Send me and email!</h2>
                        <Row>

                            <div>
                                {/* <label for="Email">Email</label> */}
                                <input className="contactInputs" ref={emailRef} id='Email' type='type' placeholder="Email" />
                            </div>

                            <div>
                                {/* <label for="subject">subject</label> */}
                                <input className="contactInputs" ref={subjectRef} id='subject' type='type' placeholder="Subject" />
                            </div>

                        </Row>

                        <Row>
                            <div>
                                {/* <label for="Message">Message</label> */}
                                <textarea className="contactInputs" ref={messageRef} id='Message' rows="6" placeholder="Message" />
                            </div>
                        </Row>
                    </Form>
                </Col>

                <Col xs='11' lg='5' className="contactResume d-flex justify-content-center">
                    <h2>Resume</h2>
                </Col>

            </Row>

        </Container>
    )
}

export default Contact