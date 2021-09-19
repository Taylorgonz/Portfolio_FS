import React, {useState } from 'react'
import './style.css';
import {Container,Card, From, Row, Col } from 'react-bootstrap';
import axios from 'axios';


function Contact() {
    return (
        <Container className='contactContainer'>
            <h1 className="contactTitle">Contact Me</h1>
        </Container>
    )
}

export default Contact
