import React, { useState, useEffect } from "react"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'




const Upload = () => {
    const [photos, setPhotos] = useState([]);
    const getPics = () => {
        axios.get('/api/photos')
            .then(res => setPhotos(res.data))
          .catch (err => setPhotos([err]));
      }

// getPics();


useEffect(() => {
    if (photos.length === 0) getPics();
}, [photos])

console.log(photos);




return (
    <Container >
    

    </Container>
)
}

export default Upload;