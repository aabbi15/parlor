'use client'

import TextTransition, { presets } from 'react-text-transition';
import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Offer from '../components/offer';
import Services from '../components/services';
import Review from '../components/review';
import Brands from '../components/brands';
import Bridal from '../components/bridal';
import Hair from '../components/hair';
import Footer from '../components/footer';
import Portfolio from '../components/portfolio';
import Lilchat from '../components/lilchat';




export default function Home() {




    return (
        <div>
          <Header/>
            <Hero/>
            <Offer/>
           
          <Services/>
          <Hair/>
           
           <Portfolio/>
            <Bridal/>
            <Review/>
            <Brands/>
           <Footer/>
           <Lilchat/>
            <div id="goTop" className="goTop" />
        </div>

    );

}