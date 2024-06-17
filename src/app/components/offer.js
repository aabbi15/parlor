'use client'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// import mainbg from '/images/mainbg.png';
import mainbg from '/public/images/mainbg.png';
import mainbg2 from '/public/images/mainbg2.png';
import mainbg3 from '/public/images/mainbg3.png';



const slideImages = [

  {url: '/images/offer4.jpg', caption: 'Caption 1'},
  {url:'/images/offer5.jpeg', caption: 'Caption 2'},
  {url:'/images/offer6.jpg', caption: 'Caption 3'},
    // person3,
]
;

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', // This ensures the image is shown only once
    backgroundPosition: 'center', // This centers the image
    backgroundColor: "#efa6baa6", // This sets the background color to black
    height: '500px',
    width: '100%' // Adjust the width as needed
  };



export default function Offer () {
    return(
        <div id='offer' className="my-10">
            <div className='text-center font-normal text-6xl pb-10 ' style={{"fontFamily":"Kurale"}}>
                Current Offers
            </div>
      <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index} className='bg-white' >
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>

    )
}