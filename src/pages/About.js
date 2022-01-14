import React from 'react';
import AboutImage from '../assets/about.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div 
            className="aboutTop"
            style={{backgroundImage:`url(${AboutImage})` }}
            ></div>
            <div className="aboutBotton">
                <h1>Sobre Nós</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque repudiandae incidunt quae ipsa, sed ut est quod, velit fugit nisi deserunt explicabo ipsam rerum quas ullam. Necessitatibus, recusandae laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque repudiandae incidunt quae ipsa, sed ut est quod, velit fugit nisi deserunt explicabo ipsam rerum quas ullam. Necessitatibus, recusandae laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque repudiandae incidunt quae ipsa, sed ut est quod, velit fugit nisi deserunt explicabo ipsam rerum quas ullam. Necessitatibus, recusandae laudantium.</p>
            </div>
            
        </div>
    )
}

export default About;
