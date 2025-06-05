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
                            Descubre <br/> El Mejor Sabor <br/> Natural
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Destaca la propuesta de valor de GreenMunch,</span>
                        <span className="secondaryText">enfocándose en la nutrición y el bienestar.</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <Icon.GeoAlt color="var(--black)" size={25} />
                        <input type="text" />
                        <button className="button">Buscar</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={400} end={1000} duration={3}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Productos Premium</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Clientes Felices</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={18}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Años de Experiencia</span>
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
                        <img src="./hero-image.webp" alt="Hero" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;