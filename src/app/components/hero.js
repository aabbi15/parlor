'use client'

import TextTransition, { presets } from 'react-text-transition';
import React, { useState, useEffect } from 'react';
import Appointment from './appointment';

export default function HeroWithAppointment(){
    const [index, setIndex] = useState(0);
    const [dialog, setDialog] = useState(false);

    const openDialog = () => {
        setDialog(true);
    };

    const closeDialog = () => {
        setDialog(false);
    };

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const TEXTS = [
        "Be bold. Be beautiful. Be you.",
        "Find your shine.",
        "Effortless beauty for every moment.",
        "Beauty & elegance amplified.",
        "Glow effortlessly, every day.",
        "Unveil your natural charm.",
    ];

    return(
        <div className="relative">
            <section className="kv">
                <div className="slider-banner">
                    <div className="slider-container">
                        <div className="item item-kv-1 active">
                            <div className="container">
                                <div className="row">
                                <div className="flex md:hidden item-k-txt  flex-col items-center w-screen mt-20 md:w-auto md:mt-40" >
                                        <div style={{ fontFamily: "Satisfy" }} className="  text-[40px]  md:text-6xl pb-3 md:pb-5">Step into </div>
                                        <div style={{ fontFamily: "Satisfy", }} className="  text-center text-[48px] md:text-[90px] py-3 md:pb-10 font-medium" >Alisha Beauty Parlor</div>
                                        <h3 className="text-xs px-3 pt-10 pb-10 md:py-0 md:text-4xl min-w-max " style={{ fontFamily: "Kurale", }}>
                                            {" "}
                                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                            {" "}
                                        </h3>
                                        <a href="#" className="btn" onClick={() => setDialog(true)}>
                                            make an appointment
                                        </a>
                                    </div>


                                    <div className=" hidden md:block item-k-txt   w-screen mt-20 md:w-auto md:mt-40" >
                                        <div style={{ fontFamily: "Satisfy" }} className="  text-[40px]  md:text-6xl pb-3 md:pb-5">Step into </div>
                                        <div style={{ fontFamily: "Satisfy", }} className="  text-[48px] md:text-[90px] py-3 md:pb-10 -mt-2 font-medium" >Alisha Beauty Parlor</div>
                                        <h3 className="text-xs pt-10 pb-10 md:py-0 md:text-4xl min-w-max " style={{ fontFamily: "Kurale", }}>
                                            {" "}
                                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                                            {" "}
                                        </h3>
                                        <a href="#" className="btn pt-10" onClick={() => setDialog(true)}>
                                            make an appointment
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {dialog && 
                <div className="  absolute top-0 left-0 w-full h-full z-50  " style={{"backgroundColor": "rgba(255,192,203,0.4)"}}>
                    <Appointment onClose={closeDialog} />
                </div>
            }
        </div>
    );
}
