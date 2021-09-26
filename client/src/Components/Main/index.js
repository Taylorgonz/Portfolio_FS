import React, {useState} from 'react';
import "./style.css";

import Hero from "../Hero/index";
import About from "../About/index";
import Photography from "../Photography/index";
import WebDev from "../Development/index"
import Contact from "../Contact/index"
import ScrollToTop from "../scrollToTop/index"


const Main = ({setModalImage, modalImage}) => {

    const [scrollNext, setScrollNext ] = useState('');
    return (
        <div className="mainWrap">
            <Hero setScrollNext={setScrollNext}/>
            <About/>
            <Photography setModalImage={setModalImage}/>
            <WebDev setModalImage={setModalImage}/>
            <Contact/>
            <ScrollToTop scrollNext={scrollNext} />
            
        </div>
    )
}

export default Main;