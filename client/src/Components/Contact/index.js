import React, { useState, useRef } from 'react'
import './style.css';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function Contact() {
    const subjectRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();
    const [alert, setAlert] = useState('')

    const contactSubmit = () => {
        
        if(subjectRef.current.value, nameRef.current.value, emailRef.current.value, messageRef.current.value) {

            axios.post('/contact', 
            {
                'name': nameRef.current.value,
                'email': emailRef.current.value,
                'subject': subjectRef.current.value,
                'message': messageRef.current.value,
            }
        )
        .then((res)=> {
            console.log(res)
            if(res.data==="success") {
               formRef.current.reset();
               setAlert('Message sent')
            }
            else{
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
                <Col xs='11' lg='6' className='contactForm'>
                    <Form ref={formRef} onSubmit={((e)=> {
                        e.preventDefault();
                        contactSubmit()
                    })}>
                            <h2 className='contactHeader'>Send me and email!</h2>
                            {alert && <h4 className='contactAlert'>{alert}</h4> }
                        <Row>

                            <div className='nameEmail'>
                                {/* <label for="Email">Email</label> */}
                                <input className="contactInputs name col-5" ref={nameRef} id='Name' type='type' placeholder="Name" />
                                <input className="contactInputs email col-6 " ref={emailRef} id='Email' type='type' placeholder="Email" />
                            </div>

                            <div>
                                {/* <label for="subject">subject</label> */}
                                <input className="contactInputs" ref={subjectRef} id='subject' type='type' placeholder="Subject" />
                            </div>

                       

                        
                            <div>
                                {/* <label for="Message">Message</label> */}
                                <textarea className="contactInputs" ref={messageRef} id='Message' rows="6" placeholder="Message" />
                            </div>
                           
                        </Row>
                        
                        <button type="submit" className="contactButton col-10">Submit</button>

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