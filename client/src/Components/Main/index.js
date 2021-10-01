import React, {useState} from 'react';
import "./style.css";

import Hero from "../Hero/index";
import About from "../About/index";
import Photography from "../Photography/index";
import WebDev from "../Development/index"
import Contact from "../Contact/index"
import ScrollToTop from "../scrollToTop/index"
import Footer from  '../Footer/index'


const Main = ({setModalImage, setModalMain}) => {

    return (
        <div className="mainWrap">
            <Hero/>
            <About/>
            <Photography setModalMain={setModalMain} setModalImage={setModalImage}/>
            <WebDev setModalMain={setModalMain}/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>

            
        </div>
    )
}

export default Main;