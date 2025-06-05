import React from "react";
import './GetStarted.css';

const GetStarted = () => {
    return (
        <section className="g-wrapper" id="empecemos">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                   <span className="primaryText">Comienza con GreenMunch</span>
                    <span className="secondaryText">Suscríbete y descubre precios súper atractivos de nuestros productos.
                    <br />Encuentra tu opción saludable pronto</span>
                    <button className="button">
                        <a href="mailto:aloisdalto@gmail.com">Comenzar</a>
                    </button> 
                </div>
            </div> 
        </section>
    );
};


export default GetStarted;