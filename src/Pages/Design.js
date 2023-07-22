import React from "react";
import sony from '../Images/sony.png'
import umg from '../Images/umg.png'


export default function Design() {
    return (
        <div className="container">
        <div className='row rowdesign'>
            <div className='col-md-5 comp-item'>
                <img src={sony} alt="logo" className="sony-logo"/>
            </div>
            <div className='col-md-5 comp-item' >
            <img src={umg} alt="logo" className="sony-logo"/>
            </div>
        </div>
        </div>
        
    )
}