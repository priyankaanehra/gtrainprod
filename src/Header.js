
import React from 'react';
import ReactDOM from 'react-dom';
import gtrainlogo from './logo.png'
import insta from './insta.png'
import hamburger from './hamburger.png'


function Navbar() {
    return (
        <div role="banner">
        <nav className="navbar navbar-expand-lg mainnav">
            <div className='navleft'>
                <a href="/" className='navtitle oswald'>
                <img src={gtrainlogo} alt="logo" className="nav-logo"/>
                G-Train Productions
                </a>
            </div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <img src={hamburger} alt="logo" className="my-toggler"/>
            </button>
            <div class="collapse navbar-collapse navright" id="navbarNavAltMarkup">
                <div class="navbar-nav oswald navitems">
                <a className="nav-item nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="/design">Design</a>
                <a className="nav-item nav-link" href="/contact">Contact</a>
                <a className="nav-item nav-link" href="https://www.instagram.com/g_trainproductions/">
                <img src={insta} alt="logo" className="insta-logo-nav"/>
            </a>
                </div>
            </div>
        </nav>
        </div>
    );
  }
  
  export default Navbar;