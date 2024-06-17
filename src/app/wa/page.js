'use client'

// import Appointment from "../components/appointment";

import React, {useState} from 'react';
import axios from 'axios';
// import Appointment from '../components/appointment';





export default function testing(){

    const [number, setNumber] = useState('');
    // console.log(number);
    

    const header = {
        headers: {
        Authorization: "Bearer EAALgbg2t7zsBO3yGTDZBQ5k5KF7lXjlurIRxLAFkmtKZBFtLEsrastjvL2Pz3F4zuRQhZBxG0pthtF4pKCr3i4KC8XsxIn7y4nJrDX2VXQz9UffkJTctGuZCYIfDZAteCCDx1s9156uZCGH7zWDht86EZAuXyb3wHu6YHWa6bF9uyOOMprmXmyhBVcJSK251CoZB",
        Accept : "application/json",
        }

    }

    const body = { 
        "messaging_product": "whatsapp",
        "to": "91"+number, 
        "type": "template", 
        "template": { 
            "name": "book_slot", 
            "language": { "code": "en_US" } ,
            "components": [
                {"type": "body",
                    "parameters": [
                        {"type": "text", text: "ALisha"},
                        {"type": "text", text: "ALisha1"},
                        {"type": "text", text: "ALisha2"},
                        {"type": "text", text: "ALisha3"},
                        {"type": "text", text: "ALisha4"},
                        {"type": "text", text: "ALisha5"},
                        {"type": "text", text: "last"}
                    ]
                }
            ]
            } 
        }



    
        function handleSubmit  () {
            

            console.log( "this is body" ,body);

            axios.post("https://graph.facebook.com/v18.0/285811927955895/messages",body,header).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
        

    return(
        <div>
            <h1>Testing</h1>
            <div className='bg-red-300 m-10'>
                <input type="text" placeholder="Enter your number" onChange={(e) =>{ 
                    console.log(number);
                    setNumber(e.target.value);

                }  } />
                <button onClick={handleSubmit}>Submit0</button>
            </div>
        </div>
    )

    

}




    // export default function Ok(){
    //     return(
    //         <Appointment/>
    //     )
    // }



