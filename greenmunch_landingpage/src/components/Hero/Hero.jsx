import React from "react";
import './Hero.css';
import * as Icon from 'react-bootstrap-icons';


const Hero = () => {
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className= "orange-circle"/>
                        <h1>Discover <br/> Most Suitable <br/> Property</h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        <span>culpa commodi exercitationem minus voluptatum debitis.</span>
                    </div>
                    <div className="search-bar">
                        <Icon.GeoAlt color="var(--blue)" size={28} />
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;