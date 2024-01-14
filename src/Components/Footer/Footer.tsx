import insta from '../../assets/insta.png'
import github from '../../assets/github-mark.png'
import './Footer.css'


export default function Footer(){
    return(
        <div className='footer'>
            
            <h3 className='copyright'> © 2024 PNDEV. All Rights Reserved. </h3>
    
            <a href="https://www.instagram.com/g_trainproductions/" target='_blank'>
                <img src={insta} alt="insta" className="instafooter"/>
            </a>
              
        </div>
        )
}