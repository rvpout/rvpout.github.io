import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';
import pic10 from '../images/Me.jpg';

function Footer() {
    return (
        <div className='footer-container'>
   
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <p>poutaroope@hotmail.com</p>
                    </div>
                </div>
            </div>
            <section className="social-media">
               <div className="social-media-wrap">
                    <div className='cv-container-logo'>
                        <img src={pic10} alt='me' id='img'/>
                    </div>
                   <samll className="website-rights">Roope Pouta © 2021</samll>
                   <div className="social-icons">
                       <Link className="social-icon-link facebook"
                       to={{ pathname: "https://www.facebook.com/roope.pouta/"}}
                       target="_blank"
                       aria-label='facebook'
                       >
                           <i className="fab fa-facebook-f"></i>
                       </Link>
                       <Link className="social-icon-link Instagram"
                       to={{ pathname: "https://www.instagram.com/roopepouta/"}}
                       target="_blank"
                       aria-label='instagram'
                       >
                           <i className="fab fa-instagram"></i>
                       </Link>
                       <Link className="social-icon-link Github"
                       to={{ pathname: 'https://github.com/rvpout'}}
                       target=":_blank"
                       aria-label='github'
                       >
                           <i className="fab fa-github"></i>
                       </Link>
                   </div>
                </div> 
            </section>
        </div>
    )
}

export default Footer;