import React, {useState, useEffect}  from "react"
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import API from '../../utils/API'
import axios from 'axios'

import Hero from '../Hero/index'


const Photography = () => {
    const [photos, setPhotos] = useState([]);
    const getPics = () => {
        API.getPhotos()
          .then(res => setPhotos(res))
          .catch(err => setPhotos([err]));
          
      }

    //  getPics();
     console.log(photos);


//  useEffect(() => {
//      if (photos === 0) {
//          getPics();
//      }
//  },[photos])


     
    return (
        <Container id="photography" className="photographyContainer" >
            <h1 className='photographyTitle'>Photography</h1>

        </Container>
    )
}

export default Photography;