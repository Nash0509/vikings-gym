import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faReddit, faDiscord, faAirbnb, faAmazon, faFlickr, faSwift } from '@fortawesome/free-brands-svg-icons';
function Footer() {

    return (
        <div className="foot">
           <div className="footer">
            <div className="one">
                <h2 style={{color:'gold', fontFamily:'Lucida Sans', textAlign:'center'}}>Our Branches</h2>
            <ol style={{color:'white', listStyleType:'none', textAlign:'center' , fontFamily:'Lucida Sans'}}>
                <li><a href="/">Delhi</a></li>
                <li><a href="/">Varanasi</a></li>
                <li><a href="/">Mirzapur</a></li>
                <li><a href="/">Bengaluru</a></li>
            </ol>
            </div>
            <div className="two">
                <h2 style={{color:'gold', fontFamily:'Lucida Sans', textAlign:'center'}}>Our Sponsors</h2>
                <ol style={{color:'white', listStyleType:'none', textAlign:'center', fontFamily:'Lucida Sans'}}>
                    <li><a href="/"><FontAwesomeIcon icon={faAirbnb} size='2x'/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faAmazon} size='2x'/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faFlickr} size='2x'/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faSwift} size='2x'/></a></li>
                </ol>
            </div>
            <div className="three">
                <h2 style={{color:'gold', fontFamily:'Lucida Sans', textAlign:'center'}}>Social Media</h2>
                <ol style={{color:'white', listStyleType:'none', textAlign:'center', fontFamily:'Lucida Sans'}}>
                    <li><a href="/"><FontAwesomeIcon icon={faYoutube} size='2x'/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faFacebook} size='2x'/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faReddit} size='2x'/></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faDiscord} size='2x'/></a></li>
                </ol>
            </div>
           

           </div>
           <div style={{textAlign:'center', marginTop:'2rem'}}><h5 style={{color:'silver', fontFamily:'Lucida Sans', opacity:'50%'}}>@All rights reserved</h5></div>
        </div>
    )
}

export default Footer;
