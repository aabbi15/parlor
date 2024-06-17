import axios from "axios";





const handleSubmit = (name, date, time, phone, service) => {

    const header = {
        headers: {
            Authorization: "Bearer EAALgbg2t7zsBO3yGTDZBQ5k5KF7lXjlurIRxLAFkmtKZBFtLEsrastjvL2Pz3F4zuRQhZBxG0pthtF4pKCr3i4KC8XsxIn7y4nJrDX2VXQz9UffkJTctGuZCYIfDZAteCCDx1s9156uZCGH7zWDht86EZAuXyb3wHu6YHWa6bF9uyOOMprmXmyhBVcJSK251CoZB",
        //    Authorization: "Bearer EAALgbg2t7zsBOZBKZB9fubYqQN1JDkOnyqMjdsKt4bfVvIZCP0MMdXiRLF7hoRJsjoNbaWeOGFPvZB2fLrJVhgGIGp4HLdZAHIZCopQdo1EYBHqHklv2UQZApSYJM0m7s6AfbvN8Km8AEZA3twMlP8Nbgu6EI0FfGbUhesOMeNjb6yF2QU78QZBJAiXqdxDivhIYYdVJbwb93q4EDxwhYLnQZD",
            Accept: "application/json",
        }
    
    }

    const currdate = new Date();
    const body = {
        "messaging_product": "whatsapp",
        "to": "91" + "9824468844",
        "type": "template",
        "template": {
            "name": "book_slot",
            "language": { "code": "en_US" },
            "components": [
                {
                    "type": "body",
                    // "parameters": [
                    //     { "type": "text", text: name },
                    //     { "type": "text", text: date },
                    //     { "type": "text", text: time },
                    //     { "type": "text", text: phone },
                    //     { "type": "text", text: "null" },
                    //     { "type": "text", text: service },
                    //     { "type": "text", text: currdate.toString() }
                    // ]

                    "parameters": [
                        {"type": "text", text: name},
                        {"type": "text", text: date.toString()},
                        {"type": "text", text: time},
                        {"type": "text", text: phone},
                        {"type": "text", text: "null"},
                        {"type": "text", text: service},
                        {"type": "text", text: currdate}
                    ]
                }
            ]
        }
    }

    console.log( "this is body" ,body );

    console.log(service);

    axios.post("https://graph.facebook.com/v19.0/285811927955895/messages", body, header).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(service);
        console.log(err);
    })
}


export default handleSubmit;