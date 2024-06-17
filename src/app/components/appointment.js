'use client'

import {useState} from 'react';
import handleSubmit from '../helpers/wa';
import axios from 'axios';
import DoneMessage from './done';


export default function Appointment({onClose}) {

    const [dialog, setDialog] = useState(false);
    const [visible, setVisible] = useState(false);

    const [name, setName] = useState('null');
    const [phone, setPhone] = useState('null');
    const [email, setEmail] = useState('null');
    const [date, setDate] = useState('null');
    const [time, setTime] = useState('null');   
    const [service, setService] = useState('uhm');

    function onSubmit2(event) {
        
        event.preventDefault();
       console.log(name, phone, email, date, time, service);
        handleSubmit(name,date,time,phone,service);
        setVisible(true);
        // DoneMessage();

    }


    return (
<div className = "py-10">
    
    <div className = "mx-auto w-11/12 md:w-2/5  bg-white p-4 rounded-md border-pink-600 border-2">
        <div className='flex justify-end'>
            <button onClick={onClose} className = " text-[pink-300] text-lg font-medium  mb-1 border-2 px-2 rounded-3xl">X</button>

        </div>
        <div className='flex flex-col items-center justify-center'>
        <a
                // onClick={onSubmit2}
                href="tel:+919824468844"
                    className = "hover:shadow-form w-11/12 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Give us a call directly at 9824468844
                </a>

                <div className='text-xl py-3 text-center'>OR</div>

        </div>
    
        <div className='flex justify-between items-center mb-2 border-b '>
            <h1 className = "text-2xl font-semibold text-[#07074D]  ">
                Book an Appointment
            </h1>
            
        </div>
        <form>
            <div className = "mb-5">
                <label htmlFor="name" className = "mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Full Name"
                    className = "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className = "mb-5">
                <label htmlFor="phone" className = "mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className = "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            
            <div className = "-mx-3 flex flex-wrap">
                <div className = "w-full px-3 sm:w-1/2">
                    <div className = "mb-5">
                        <label htmlFor="date" className = "mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input onChange={(e) => setDate(e.target.value)} type="date" name="date" id="date"
                            className = "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className = "w-full px-3 sm:w-1/2">
                    <div className = "mb-5">
                        <label htmlFor="time" className = "mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input onChange={(e) => setTime(e.target.value)} type="time" name="time" id="time"
                            className = "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div className = "mb-5 pt-3">
                <label  className = "mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Services required
                </label>
                <div className = "-mx-3 flex flex-wrap">
                    <div className = "w-full px-3 ">
                        <div className = "mb-5">
                            <input type="text" name="service" id="service" placeholder="Waxing, Threading OR Facial"
                                onChange={(e) => setService(e.target.value)}
                                className = "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                   
                </div>
            </div>

            <div>
      {visible && (
        <div className=" text-center bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-500">
          Done! We will contact you soon!
        </div>
      )}
    </div>
            
            {!visible && (<div>
                <button
                onClick={event => onSubmit2(event)}
                    className = "hover:shadow-form w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
                
                
            </div>)}
        </form>
    </div>
</div>
    )
}