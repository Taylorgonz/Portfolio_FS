import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'

import Hero from '../Hero/index'


const Photography = ({ setModalImage }) => {
    const [photos, setPhotos] = useState([]);
    // const [photos, setPhotos] = useState([]);
    // const [photos, setPhotos] = useState([]);
    const getPics = () => {
        axios.get('/api/photos')
            .then(res => setPhotos(res.data))
            .catch(err => setPhotos([err]));
    }

    // getPics();


    useEffect(() => {
        if (photos.length === 0) getPics();
    }, [photos])

    console.log(photos);




    return (
        <Container id="photography" className="photographyContainer" >
            <h1 className='photographyTitle'>Photography</h1>
            <Row className='photoRow'>
                <Col>
                <h2>Life Style</h2>
                    {photos.map((photo, i) =>
                        <img className="photoImages" key={photo.id} src={photo.url} onClick={() => setModalImage(photo.url)} />
                    )}
                </Col>
                <Col>
                <h2>Portraits</h2>
                    {photos.map((photo, i) =>
                        <img className="photoImages" key={photo.id} src={photo.url} onClick={() => setModalImage(photo.url)} />
                    )}
                </Col>
                <Col>
                <h2>Product</h2>
                    {photos.map((photo, i) =>
                        <img className="photoImages" key={photo.id} src={photo.url} onClick={() => setModalImage(photo.url)} />
                    )}
                </Col>
            </Row>

        </Container>
    )
}

export default Photography;