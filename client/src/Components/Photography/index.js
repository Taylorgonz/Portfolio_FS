import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col, Carousel } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'




const Photography = ({ setModalImage, setModalMain }) => {
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
        <Container fluid={true} id="Photography" className="photographyContainer" >
            <h1 className='photographyTitle'>Photography</h1>
            <Row className='photoRow'>
                <Col md="4">
                    <h2 className="styleTitles">Life Style</h2>
                    <Carousel interval={null} prevLabel='prev' variant='dark' className="carouselStyle">

                        {lifePhotos.map((photo, i) =>
                            <Carousel.Item onClick={(e) => {
                                setModalImage(lifePhotos)
                                setModalMain(photo.url)


                            }
                            } >
                                <div className="photoOverlay" />
                                <img className="photoImages" key={photo.id} src={photo.url} />
                            </Carousel.Item>
                        )}

                    </Carousel>

                </Col>
                <Col md="4">
                    <h2 className="styleTitles">Portraits</h2>
                    <Carousel interval={null} prevLabel='prev' className="carouselStyle">

                        {portPhotos.map((photo, i) =>
                            <Carousel.Item onClick={(e) => {
                                setModalImage(portPhotos)
                                setModalMain(photo.url)


                            }
                            } >
                                <div className="photoOverlay" />
                                <img className="photoImages" key={photo.id} src={photo.url} />
                            </Carousel.Item>
                        )}

                    </Carousel>

                </Col>
                <Col md="4">
                    <h2 className="styleTitles">Product</h2>
                    <Carousel interval={null} prevLabel='prev' className="carouselStyle">

                        {prodPhotos.map((photo, i) =>
                            <Carousel.Item onClick={(e) => {
                                setModalImage(prodPhotos)
                                setModalMain(photo.url)


                            }} className="carouselItem" >
                                <div className="photoOverlay" />
                                <img className="photoImages" key={photo.id} src={photo.url} />
                            </Carousel.Item>
                        )}

                    </Carousel>

                </Col>
            </Row>

        </Container>
    )
}

export default Photography;