'use client'
import {useState} from 'react';
import React from 'react';
import Appointment from './appointment';
import Header from './header';
import Image from 'next/image';
import Aptbutton from './aptbutton';

const MenuPage = ({number,type}) => {

    // number = 1;

    const image_url = `/menus/`+number+`.png`;


    const [dialog, setDialog] = useState(false);

    const openDialog = () => {
        setDialog(true);
    };

    const closeDialog = () => {
        setDialog(false);
    };



    return (
        <div className="min-h-screen bg-pink-100">
            {/* <Header/> */}
            <section className="flex flex-col justify-center items-center py-3 gap-5">
            <h1 className="logo">
                        <a href="/">
                            <Image src="/images/logo.png" className="logo-light" height={100} width={100} />
                        </a>
                    </h1>
                {/* <button className="bg-pink-500 text-white py-3 px-6 rounded-lg text-xs ">Go Back to Home Page</button> */}
                {/* <button onClick={openDialog} className=" text-white  btn2 bg-pink-500">Book an Appointment</button> */}
            </section>

            
            <section className="py-6 px-4 ">
                <h2 style={{ fontFamily: "Satisfy" }} className="text-2xl md:text-4xl sm:text-3xl font-bold mb-8 text-center" > Menu Card for {type}</h2>
                <img src={image_url} alt="Bridal Menu Card" className="mx-auto rounded-lg shadow-lg max-w-[500px]" />
            </section>

           
            <section className="flex flex-col justify-center items-center py-8 gap-5">
                <button onClick={openDialog} className=" text-white  btn2 bg-pink-500">Book an Appointment</button>
                <a href='/'>
                
                <button  className="bg-pink-500 text-white py-3 px-6 rounded-lg text-sm ">Go Back to Home Page</button>
                </a>
            </section>

            {dialog && 
                <div className="  absolute top-0 left-0 w-full h-full z-50  " style={{"backgroundColor": "rgba(255,192,203,0.4)"}}>
                    <Appointment onClose={closeDialog} />
                </div>
            }

            {/* <Appointment/> */}
            
        </div>
    );
};

export default MenuPage;
