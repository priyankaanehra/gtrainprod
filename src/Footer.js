import React from 'react';
import ReactDOM from 'react-dom';
import insta from './insta.png'


export default function Footer(){
    return(
        <div className='container copyright'>
            <h3 className='allrights oswald'> © 2023 PNDEV. All Rights Reserved. </h3>
            <a href="https://www.instagram.com/g_trainproductions/">
                <img src={insta} alt="logo" className="insta-logo"/>
            </a>
                
                
        </div>
        )
}
