import './Home.css'
import bgvid from "../../assets/gtrainvid2.mp4"
import epic from "../../assets/epic.png"
import cmg from "../../assets/cmg.jpeg"
import sony from "../../assets/sony.jpeg"
import rollingLoud from "../../assets/rollingloud.png"
import umg from "../../assets/umg.png"
import montblanc from "../../assets/montblanc.png"
import empire from "../../assets/empire.png"
import motown from "../../assets/motown.png"
import eandv from "../../assets/eandv.png"
import onerpm from "../../assets/onerpm.jpeg"

export default function Home(){

    return(
        <div className='homeGeneral'>
            <div>
                <div className='gtvideo'>
                <video autoPlay muted loop id="myVideo">
                    <source src={bgvid} type="video/mp4"/>
                </video>
                </div>
                <div className='gname'>
                    <h1 className='homeName'>G-TRAIN PRODUCTIONS</h1>
                    <div className='line'></div>
                    <p className='companytype'>Production Company</p>
                </div>    
            </div>
            <div className='brandsTitle'>
                <h4 className='coolBrands'>Previous clients</h4>
            </div>
            <div className='brandContain'>
            <div className='brands grid-container'>
                <div className="grid-item">
                <img src={motown} alt="motown" className="motown"/>
                </div>
                <div className="grid-item">
                <img src={cmg} alt="cmg" className="cmg"/>
                </div>
                <div className="grid-item">
                <img src={epic} alt="epic" className="epic"/>
                </div>
                <div className="grid-item">
                <img src={sony} alt="sony" className="sony"/>
                </div>
                <div className="grid-item">
                <img src={rollingLoud} alt="rollingLoud" className="rollingLoud"/>
                </div>
                <div className="grid-item">
                <img src={empire} alt="empire" className="empire"/>
                </div>
                <div className="grid-item">
                <img src={umg} alt="umg" className="umg"/>
                </div>
                <div className="grid-item">
                <img src={montblanc} alt="montblanc" className="montblanc"/>
                </div>
                <div className="grid-item">
                <img src={eandv} alt="eandv" className="eandv"/>
                </div>
                <div className="grid-item">
                <img src={onerpm} alt="onerpm" className="onerpm"/>
                </div>
            </div>  
            </div>

            <div className='vidContain'>
                <div className='video-grid'>
                    <div className="grid-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/oa96OPhV59s?si=m3DwKgHOzoDxVjC3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="video-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-E2ClhNYW-U?si=LDniniaVZNhCR1Vq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                    </div>
                </div>
            </div>
            <div className='vidContain'>
                <div className='video-grid'>
                    <div className="video-wrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/031GpK6nKOI?si=_dXs3jvlMj5ANo5f" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                    
                    </div>
                        <div className="grid-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WA1-hJHEj64?si=6fujoYGF8c80T8aF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                
                        </div>
                    </div>
            </div>
            <div className='vidContain'>
                <div className='video-grid'>
                        <div className="video-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/P-rN0qPh1qE?si=EszYuMDHCnlYcn6y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                    
                        </div>
                        <div className="grid-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6U7_aZbS3qE?si=5jOF3CkC8qC34Gpb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                    
                        </div>
                </div>
            </div>
        </div>  
    )
}