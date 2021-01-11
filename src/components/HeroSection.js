import React from 'react';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';
import '../App.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Welcome To My Portfolio</h1>
            <p>I am computer science student in University of Turku</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    About me
                </Button>
                <Button2
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    My Projects
                </Button2>
            </div>
        </div>
    )
}

export default HeroSection;
