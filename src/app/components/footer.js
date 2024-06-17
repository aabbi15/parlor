import React from "react";






export default function Footer  ()  {
  return (
    <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
   
           <a href="/#" className=" inline-block max-w-[160px]">
                   <img
                     src="/images/logo.png"
                     alt="logo"
                     className="max-w-full d:hidden"
                     width={100}
                     height={100}
                   />
                 
                 </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
            Purusharth Avenue,Radha Krishna Char Rasta, Akota, Vadodara, 390020
            </p>
            
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:9824468844"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              9824468844
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:9824030662"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              9824030662
            </a>
          </div>
        
                    
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Quick links
          </span>
          <div header="Quick Links" className="">
              <a href="#" label="Home" > Home </a> <br/>
              <a href="#offer" label="Current Offers" > Current Offers </a> <br/>
              <a href="#hair" label="Hair Styling" > Hair Styling</a><br/>
              <a href="#services" label="Services Offered" > Services</a> <br/>
                <a href="#bridal" label="Bridal Makeup" > Bridal Makeup</a><br/>
                <a href="#review" label="Client Reviews" > Reviews </a>
            </div>

        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2024 Alisha Beauty Parlor All rights reserved.
        </p>
        
      </div>
    </div>
  );
};