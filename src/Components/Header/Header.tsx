import { Link } from 'react-router-dom';
import insta from '../../assets/insta.png'
import './Header.css'
import gtrain from '../../assets/logo.png'
import yt from '../../assets/yt.png'
import linkedin from '../../assets/linkedin.png'
import mail from '../../assets/email.png'


const Header = () => {
    return (
    <nav className="navbar">
        <div className="navbar-left">
            <ul> 
                <li><Link to='/' className="logo-block">
                <img src={gtrain} alt="gtrain logo" className="gtrain-logo-nav"/>
                </Link></li>
            </ul>
        </div>
        <div>
            <ul className="navbar-right">
                {/* <li><Link to='/'>HOME</Link></li> */}
                <li><Link to="https://www.instagram.com/g_trainproductions/" target='_blank'>
                        <img src={insta} alt="insta logo" className="insta-logo-nav"/>
                    </Link>
                </li>
                <li><Link to="mailto:gtrainvisuals@gmail.com?Subject=" target='_blank'>
                        <img src={mail} alt="insta logo" className="mail-logo-nav"/>
                    </Link>
                </li>
                <li><Link to="https://www.youtube.com/@g-trainproductions" target='_blank'>
                        <img src={yt} alt="yt logo" className="yt-logo-nav"/>
                    </Link>
                </li>
                <li><Link to="https://www.linkedin.com/company/g-train-productions/" target='_blank'>
                        <img src={linkedin} alt="linkedin logo" className="linkedin-logo-nav"/>
                    </Link>
                </li>
                
            </ul>
        </div>
        
    </nav>)
}
  
  export default Header;