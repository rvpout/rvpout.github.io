import React from 'react';
import '../App.css';
import './Cv.css';


function Cv() {
    return (
        <div className='cv-container'>
            <h1>My experience</h1>
            <div className='cv-container-wrapper'>
            <div className='cv-container-wrapper-info'>
                    <h3>Working experience</h3>
                    <p>• Lidl salesman 6/2018 - 9/2018</p>
                    <p>• Makuuni salesman 10/2016 - 8/2017</p>
                    <p>• Eezy personnel service 5/2016 - 6/2016 & 3/2019 →</p>
           
                    <h3>Education</h3>
                    <p>• I graduated from highschool in 2016. </p>
                    <p>• I started studying computer science at University of Turku in 2018. I am currently in my third year.</p>
  
                    <h3>Coding experience</h3>
                    <p>• I have done most of my projects with Java so I am most used to it.</p>
                    <p>• I also have some experience with Python & SQL.</p>
                    <p>• I have done one pretty large microchip project with C.</p>
                </div>
            </div>            
        </div>
    )
    
}

export default Cv;