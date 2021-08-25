import React from 'react';

import Hero from "../Hero/index";
import About from "../About/index";
import Photography from "../Photography/index";
import Upload from '../Upload/index'

const Main = ({setModalImage, modalImage}) => {

    return (
        <div>
            <Hero/>
            <About/>
            <Photography setModalImage={setModalImage}/>
        </div>
    )
}

export default Main;