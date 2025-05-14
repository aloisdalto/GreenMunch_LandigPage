import React from "react";
import './Contact.css';
import {TelephoneFill , ChatDotsFill, ChatSquareTextFill} from 'react-bootstrap-icons';

const Contact = () => {
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">We always ready to help by providijing the best service for you. We beleive a good blace to live can make your life better</span>

                    <div className="flexColStart contactModes">
                        {/* first row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <TelephoneFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">021 000 000 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <ChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">021 020 024 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                            
                        </div>
                        {/* second row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <ChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">021 000 000 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <ChatSquareTextFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">021 000 000 11</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="flexEnd c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="Contac" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;