import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="Logo" width={120}/>
                    <span className="secondaryText">Nuestra visión es ofrecer a todas las personas, <br />mejores opciones saludables para mejorar su vida.</span>

                </div>

                {/* right side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Información</span>
                    <span className="secondaryText location">Ciudad Guayana, Venezuela</span>
                    <div className="flexCenter f-menu">
                        <span className="orange">Property</span>
                        <span className="orange">Services</span>
                        <span className="orange">Product</span>
                        <span className="orange">About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;