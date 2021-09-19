import React from 'react';
import "./style.css";

import Hero from "../Hero/index";
import About from "../About/index";
import Photography from "../Photography/index";
import WebDev from "../Development/index"
import Contact from "../Contact/index"


const Main = ({setModalImage, modalImage}) => {

    return (
        <div className="mainWrap">
            <Hero/>
            <About/>
            <Photography setModalImage={setModalImage}/>
            <WebDev setModalImage={setModalImage}/>
            <Contact/>
        </div>
    )
}

export default Main;