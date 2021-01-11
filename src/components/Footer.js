import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section
            className="footer-subscription">
              <p className="footer-subscription-heading">
                  Keksi tähän jotain vitun hienoo sitku oot valmis
                </p>
                <p className="footer-subscription-text">
                    Jooo halloota vaa    
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email"
                         className="footer-input"/>
                         <Button buttonStyle='btn--outline'>Subscribe</Button>   
                    </form>    
                </div> 
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/Projects'>Mitä oot tehny</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/Projects'>Mitä oot tehny</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
               <div className="social-media-wrap">
                   <samll className="website-rights">Roope Pouta © 2021</samll>
                   <div className="social-icons">
                       <Link className="social-icon-link facebook"
                       to="/"
                       target="_blank"
                       aria-label='facebook'
                       >
                           <i className="fab fa-facebook-f"></i>
                       </Link>
                       <Link className="social-icon-link Instagram"
                       to="/"
                       target="_blank"
                       aria-label='instagram'
                       >
                           <i className="fab fa-instagram"></i>
                       </Link>
                       <Link className="social-icon-link Github"
                       to='https://github.com/rvpout'
                       target="https://github.com/rvpout"
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