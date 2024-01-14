import './Home.css'
import bgvid from "../../assets/gtrainvid1.mp4"
import wayup from "../../assets/1wayup.png"

export default function Home(){

    return(
        <div>
        <div>
            <div className='gtvideo'>
            <video autoPlay muted loop id="myVideo">
                <source src={bgvid} type="video/mp4"/>
            </video>
            </div>
            <div className='gname'>
                <h1 className='homeName'>G-TRAIN PRODUCTIONS</h1>
                <div className='horizontalblock'></div>
                <p className='companytype'>Production Company</p>
            </div>    
            </div>       
            <div className='musicvid1'>
            <img src={wayup} alt="wayup" className="wayup"/>
            </div> 
        </div>
        )
}