
import React from 'react';
import ReactDOM from 'react-dom';
import gtrainlogo from './logo.png'

function Navbar() {
    return (
        <div role="banner">
        <nav class="navbar navbar-expand-lg mainnav">
            <div className='navleft'>
                <a href="#" className='navtitle oswald'>
                <img src={gtrainlogo} alt="logo" className="nav-logo"/>
                G-Train Productions
                </a>
            </div>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navright" id="navbarNavAltMarkup">
                <div class="navbar-nav oswald navitems">
                <a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
        </div>
    );
  }
  
  export default Navbar;