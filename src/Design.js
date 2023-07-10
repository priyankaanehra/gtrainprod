import React from "react";
import PropTypes from "prop-types";
import YoutubeEmbed from "./YoutubeEmbed";
import Header from './Header.js'
import Footer from './Footer.js'
import sony from './sonymusic.png'


export default function Design() {
    return (
        <div className="container">
        <Header/>

        <div className='row rowdesign'>
            <div className='col-md-5 comp-item'>
                <img src={sony} alt="logo" className="sony-logo"/>
            </div>
            <div className='col-md-6 comp-item col-md-offset-2' >
                <h1>Empire Music Group</h1>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}