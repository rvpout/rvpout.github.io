import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import pic1 from '../images/image1.jpg';
import pic2 from '../images/image2.jpg';
import pic3 from '../images/image3.jpg';
import pic4 from '../images/image4.jpg';
import pic5 from '../images/image5.jpg';
import pic6 from '../images/image6.jpg';


function Cards() {
    return (
        <div className="cards">
            <h1>Here is some of my projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={pic1}
                        text="ATMega 4809-based optical tachometer uses a LED and a photoresistor to detect a plastic blade that's run by a 5.5V DC-motor from the board. Coded with C"
                        label='Optical Tachometer'
                        path='/Projects'
                        />
                        <CardItem 
                        src={pic6}
                        text="Multiplayer gorilla game. Coded with Java"
                        label='Gorilla game'
                        path='/Projects'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={pic2}
                        text="Simple calculator with user interface. Coded with Java."
                        label='Calculator'
                        path='/Projects'
                        />
                        <CardItem 
                        src={pic3}
                        text="Simple ticket booking application. Coded with Java."
                        label='Ticket booking application'
                        path='/Projects'
                        />
                        <CardItem 
                        src={pic4}
                        text="Simple automatic weather update to my phone every morning. Coded with python."
                        label='Automatic message'
                        path='/Projects'
                        />
                        <CardItem 
                        src={pic5}
                        text="My portfolio. Coded with React"
                        label='Portfolio'
                        path='/Projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
