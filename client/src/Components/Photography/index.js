import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'

import Hero from '../Hero/index'


const Photography = ({ setModalImage }) => {
    const [portPhotos, setPortPhotos] = useState([]);
    const [prodPhotos, setProdPhotos] = useState([]);
    const [lifePhotos, setLifePhotos] = useState([]);
    const getPics = () => {
        axios.get('/api/photos/portrait')
            .then(res => setPortPhotos(res.data))
            .catch(err => setPortPhotos([err]));

        axios.get('/api/photos/lifestyle')
            .then(res => setLifePhotos(res.data))
            .catch(err => setLifePhotos([err]));

        axios.get('/api/photos/product')
            .then(res => setProdPhotos(res.data))
            .catch(err => setProdPhotos([err]));

    }

    // getPics();


    useEffect(() => {
        if (portPhotos.length === 0) getPics();
    })

    




    return (
        <Container id="photography" className="photographyContainer" >
            <h1 className='photographyTitle'>Photography</h1>
            <Row className='photoRow'>
                <Col>
                    <h2>Life Style</h2>
                    {lifePhotos.map((photo, i) =>
                        <img className="photoImages" key={photo.id} src={photo.url} onClick={() => setModalImage(photo.url)} />
                    )}
                </Col>
                <Col>
                    <h2>Portraits</h2>
                    {portPhotos.map((photo, i) =>
                        <img className="photoImages" key={photo.id} src={photo.url} onClick={() => setModalImage(photo.url)} />
                    )}
                </Col>
                <Col>
                    <h2>Product</h2>
                    {prodPhotos.map((photo, i) =>
                        <img className="photoImages" key={photo.id} src={photo.url} onClick={() => setModalImage(photo.url)} />
                    )}
                </Col>
            </Row>

        </Container>
    )
}

export default Photography;