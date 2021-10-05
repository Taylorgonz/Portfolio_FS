import React, { useState, useRef } from 'react'
import './style.css';
import { Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import resumejpg from './resume/resume.jpg';
import resumepdf from './resume/resume.pdf';
import instagram from './icons/instagram.png';
import github from './icons/github.png';
import linkedin from './icons/linked-in.png';
import email from './icons/email.png';

function Contact() {
    const subjectRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();
    const [alert, setAlert] = useState('')

    const contactSubmit = () => {

        if (subjectRef.current.value, nameRef.current.value, emailRef.current.value, messageRef.current.value) {

            axios.post('/contact',
                {
                    'name': nameRef.current.value,
                    'email': emailRef.current.value,
                    'subject': subjectRef.current.value,
                    'message': messageRef.current.value,
                }
            )
                .then((res) => {
                    console.log(res)
                    if (res.data === "success") {
                        formRef.current.reset();
                        setAlert('Message sent')
                    }
                    else {
                        setAlert('Something went wrong')
                    }

                })
        }
        else {
            setAlert('Please fill out all boxes')
        }


    }


    return (
        <Container fluid={true} id='Contact' className='contactContainer'>
            <h1 className="contactTitle">Contact Me</h1>



            <Row className='d-flex justify-content-center'>
                <Col xs='11' m='11' lg='6' className='contactForm'>
                    <Form ref={formRef} onSubmit={((e) => {
                        e.preventDefault();
                        contactSubmit()
                    })}>
                        <h2 className='contactHeader'>Send me and email!</h2>
                        {alert && <h4 className='contactAlert'>{alert}</h4>}
                        <Row>

                            <div className='nameEmail'>
                                <input className="contactInputs name col-5" ref={nameRef} id='Name' type='type' placeholder="Name" />
                                <input className="contactInputs email col-6 " ref={emailRef} id='Email' type='type' placeholder="Email" />
                            </div>

                            <div>
                                <input className="contactInputs" ref={subjectRef} id='subject' type='type' placeholder="Subject" />
                            </div>

                            <div>
                                <textarea className="contactInputs" ref={messageRef} id='Message' rows="7" placeholder="Message" />
                            </div>

                        </Row>

                        <button type="submit" className="contactButton col-10">Submit</button>

                    </Form>
                </Col>

                <Col xs='11' m='11' lg='5' className="contactResume">
                    <h2>Contact</h2>

                    <Row className='contactRow'>
                        <div className='contactInfo'>
                            <h3>Name: Taylor Gonzales</h3>
                            <h3>Phone: (940) 453-8585</h3>
                            <div className="social">
                                <a target="_blank" href='https://www.instagram.com/taylorgonz/'><img className="socialIcons" src={instagram} /></a>
                                <a href='mailto: hello@taylorgonz.com'><img className="socialIcons" src={email} /></a>
                                <a target="_blank" href='https://github.com/Taylorgonz'><img className="socialIcons" src={github} /></a>
                                <a target="_blank" href='https://www.linkedin.com/in/taylorgonz/' ><img className="socialIcons" src={linkedin} /></a>
                            </div>

                        </div>
                        <div className="resumeFile">
                            <div className="resumeOverlay">
                            <a target="_blank" href={resumepdf}> <h2>Resume</h2></a>
                            </div>
                            
                            <a target="_blank" href={resumepdf}><img className="resumeImg" src={resumejpg} /></a>

                        </div>
                    </Row>

                </Col>

            </Row>

        </Container>
    )
}

export default Contact