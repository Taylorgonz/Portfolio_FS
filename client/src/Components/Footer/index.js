import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'
function Footer() {
    return (
        <div className='footerContainer'>
            <h2 className='footerTitle'>site built by: Taylor Gonzales</h2>
            <div className="footerList">
            <p className='footerSubtitle'>built with:</p>
            
            <ul>
                <li>React</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Cloudinary</li>
                <li>Firebase Auth</li>
                <li>Axios</li>
            </ul>
            </div>
            <div className="footerLinks">
            <a href="https://github.com/Taylorgonz/Portfolio_FS" target="_blank">GitHub Repo</a>
           <Link to="/upload">Upload</Link>
           </div>
        </div>
    )
}

export default Footer
