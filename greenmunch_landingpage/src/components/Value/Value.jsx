import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {CaretDownFill} from 'react-bootstrap-icons';
import './Value.css';
import data from "../../utils/accordion";

const Value = () => {
    const [className, setClassName] = useState(null)
    return (
        <section className="v-wrapper" id="preguntas">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */} 
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.webp" alt="Value"/>
                    </div>
                </div>

                {/* right side */} 
                <div className="flexColStart v-right">
                    <span className="orangeText">Algo más de información</span>
                    <span className="primaryText">Preguntas Frecuentes</span>
                    <span className="secondaryText">
                        En GreenMunch, estamos comprometidos a ofrecerte los mejores productos
                        <br />
                        Creemos que una alimentación nutritiva puede transformar tu vida 
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded = {false}
                        preExpanded={[0]}
                    >
                        {
                           data.map((item, i) =>{
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">{item.heading}</span>
                                            <div className="flexCenter icon">
                                                <CaretDownFill size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                           })
                        }
                    </Accordion>
                </div>
            </div>    
        </section>
    );
};

export default Value;