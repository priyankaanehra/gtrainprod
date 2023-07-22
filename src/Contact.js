import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header.js'
import Footer from './Footer';

export default function Contact(){
    return(
        <div className='container contactpage'>
            <h1 className='contact-title'>LET'S WORK TOGETHER</h1>
            <div>
                <p className='email'>
                    <span className='emailname'>Email: </span> <span className='emailfull'>gtrainproductions@gmail.com</span>
                </p>
            </div>

            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label className='contacttitles' for="name">Name</label>
                        <input type="email" class="form-control" id="name" placeholder=""/>
                    </div>
                    <div class="form-group col-md-6">
                        <label className='contacttitles' for="email">Email</label>
                        <input type="password" class="form-control" id="email" placeholder=""/>
                    </div>
                </div>
                <div class="form-group">
                    <label className='contacttitles' for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject" placeholder=""/>
                </div>
                <div class="form-group">
                    <label className='contacttitles' for="message">Message</label>
                    <input type="text" class="form-control" id="message" placeholder=""/>
                </div>
                <button type="submit" class="btn btn-outline-light contactsubmit">Submit</button>
            </form>                            
    </div>
    )   
}
