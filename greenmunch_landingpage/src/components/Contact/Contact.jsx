import React from "react";
import './Contact.css';
import {TelephoneFill , ChatDotsFill, ChatSquareTextFill} from 'react-bootstrap-icons';

const Contact = () => {
    return(
        <section className="c-wrapper" id="contactanos">
            <div className="paddings innerWidth flexCenter c-container">
                {/* lado izquierdo */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Nuestros Contactos</span>
                    <span className="primaryText">Fácil de contactarnos</span>
                    <span className="secondaryText">Siempre estamos listos para ayudarte brindándote el mejor servicio. Creemos que un buen lugar para vivir puede mejorar tu vida.</span>

                    <div className="flexColStart contactModes">
                        {/* primera fila */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <TelephoneFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Llamar</span>
                                        <span className="secondaryText">021 000 000 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Llamar Ahora</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <ChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chatear</span>
                                        <span className="secondaryText">021 020 024 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chatear Ahora</div>
                            </div>
                        </div>
                        {/* segunda fila */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <ChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Videollamada</span>
                                        <span className="secondaryText">021 000 000 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Videollamada Ahora</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <ChatSquareTextFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Mensaje</span>
                                        <span className="secondaryText">021 000 000 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Enviar Mensaje</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* lado derecho */}
                <div className="flexEnd c-right">
                    <div className="image-container">
                        <img src="./contact.webp" alt="Contacto" />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;