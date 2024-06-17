'use client'

import React from "react";
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


export default function Services() {

    let [hover, setHover] = React.useState(false);

    const styles = StyleSheet.create({
        bounce: {
          animationName: bounce,
          animationDuration: '5s'
        }
      })

    const Props = [
        {   num: 1,
            icon: "images/service/bride.jpg",
            title: "Makeup for special ocassions",
            description: "Enhance your natural beauty with expertly shaped and tinted eyebrows, tailored to complement your facial features.",
        },
        {
            num: 2,
            icon: "images/service/facial.jpg",
            title: "Facials",
            description: "Indulge in our facial treatments designed to rejuvenate your skin, leaving it radiant and refreshed.",
        },
        {   

            num: 3,
            icon: "images/service/haircut.jpg",
            title: "Haircut, Hair color and styling",
            description: "Elevate your look with our professional haircut and styling services, tailored to suit your personal style and preferences.",
        },
        {
            num: 4,
            icon: "images/service/wax.jpg",
            title: "Waxing and Threading",
            description: "Experience smooth, hair-free skin with our gentle and effective hair removal services, suitable for all skin types.",
        },
        {
            num: 5,
            icon: "images/service/mani.jpg",
            title: "Manicure & Pedicure",
            description: "Revitalize your skin with our advanced skin rejuvenation treatments, designed to reduce signs of aging and improve skin texture.",
        },
        {
            num: 6,
            icon: "images/service/hairspa.jpg",
            title: "Spa Services",
            description: "Escape into a world of relaxation and pampering with our luxurious spa treatments, designed to soothe your body and mind.",
        },
        // {
        //     num: 7,
        //     icon: "images/service/thread.jpg",
        //     title: "Threading",
        //     description: "Achieve perfectly shaped eyebrows with our threading services, designed to create a defined and polished look.",
        // },
        {
            num: 8,
            icon: "images/service/package.jpg",
            title: "Special Packages",
            description: "Get huge discounts on our special packages, designed to provide you with a complete beauty experience at an affordable price.",
        },
    ]

    function ServiceBox() {
        let mycomp = [];
        for(let i=0; i<Props.length; i++){
            let props = Props[i];
            
        mycomp.push (
            <a href={`/menu/${props.num}`} className="service-box mb-2">
           <div >
                
                <div className="service-icon  " >
                    <img src={props.icon} className="" style={{"border-radius": "50%"}}/>
                </div>
                <div className="service-title">
                    <b>{props.title}</b>
                </div>
                <div className="description">{props.description}</div>
                
            </div>
            </a>
            
        );
        }
        return mycomp;
    }
    return (
        <div id="services" className="services-container">
            <div className="inner-container">
                <div className='text-center font-normal text-6xl ' style={{ "fontFamily": "Kurale" }}>
                    Services</div>
                <div className="border" />
                <div className="service-container">
                    <ServiceBox />
                </div>
            </div>
        </div>
    );
}