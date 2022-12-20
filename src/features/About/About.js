import React from "react";
import './About.css';
import aboutImg from '../../images/paulo-doi-6uTQmtqcAzs-unsplash.jpg';

export const About = () => {
    return (
        <section id="about">
            <div className="about-text">
                <h2 className="about-h2">About Atatakai</h2>
                <p className="about-p">
                    Atatakai is a Japanese restaurant that aims 
                    to bring a piece of Japan closer to you.
                </p>
                <p className="about-p">
                    We offer classic Japanese dishes that you may 
                    or may not have tried before!
                </p>
                <p className="about-p">
                    Feel free to make a reservation, order online,
                    or just visit us for a nice meal!
                </p>
            </div>
            <figure className="about-figure">
                <img className="about-img" src={aboutImg} alt="Bowl of ramen" />
            </figure>
        </section>
    );
}