import React from "react";
import './Hero.css';
import * as Icon from 'react-bootstrap-icons';
import CountUp from 'react-countup';
import { motion, spring } from 'framer-motion';

const Hero = () => {
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className= "orange-circle"/>
                        <motion.h1 
                            initial={{y: "2rem" , opacity:0}}
                            animate={{y: 0, opacity:1}}
                            transition={{duration:2, type:"spring"}}>
                            Discover <br/> Most Suitable <br/> Property
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                        <span className="secondaryText">culpa commodi exercitationem minus voluptatum debitis.</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <Icon.GeoAlt color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premiun Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winning</span>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <motion.div 
                    className="image-container"
                    initial={{x: "7rem" , opacity:0}}
                    animate={{x: 0, opacity:1}}
                    transition={{duration:2, type:"spring"}}>
                        <img src="./hero-image.png" alt="Hero" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;