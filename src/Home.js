import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header.js'
import MainContent from './MainContent';
import Footer from './Footer';

export default function Home(){
    return(
        <div className='container'>
            <Header/>
            <MainContent/>
            <Footer/>
                
        </div>
        )
}
