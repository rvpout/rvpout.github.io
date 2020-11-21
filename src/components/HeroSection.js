import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import video from '../videos/video-2.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay muted loop src={video} />
            <h1>Portfolio</h1>
            <p>Some projects..</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Get started
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Yolo
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
