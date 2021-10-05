import React, { useState, useEffect } from 'react';
import "./style.css"
import { Container, Row, Col, Carousel } from "react-bootstrap";


const Modal = ({ modalImage, setModalImage, modalMain, setModalMain }) => {

    const handleClick = (e) => {

        if (e.target.classList.contains('backdrop')) {
            setModalImage(null);

        }
    }
   

    return (
        <div className="backdrop" onClick={(handleClick)}>
            <h2 className="modalCancel" onClick={(e) => {
                setModalImage(null)
                setModalMain(null)
            }}>close x</h2>

            <div className="mobileContainer">
                <img src={modalMain} className='displayModal' alt="modal popup" />

                {modalImage &&
                    <div className="displayWrap">
                        {modalImage.map((photo, i) =>


                            <img onClick={() => setModalMain(photo.url)} className=" modalImage" key={photo.id} src={photo.url} />

                        )}
                    </div>
                }

            </div>



        </div>
    )
}

export default Modal;