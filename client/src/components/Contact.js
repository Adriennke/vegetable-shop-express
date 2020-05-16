import React, { useState } from 'react';
import '../App2.css'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(false)

    const formSubmission = (e) => {
        e.preventDefault();


        /* checking for empty field */
        if (!(name.length > 0 && email.length > 0 && message.length > 0)) {
            alert("please fill out empty fields")
        } else {
            let emailcheck = email.split("@")
            let emailLeft = emailcheck[0]
            let emailRight = emailcheck[1]

            if (emailLeft.length <= 3) {
                alert("email to Short")
            } else {

                let number = "0123456789."

                let count = 0
                for (let i = 0; i < number.length; i++) {
                    if (emailLeft.includes(number[i])) {

                        console.log(number.split("")[i])
                        count++
                    }
                }
                if (!(count < emailLeft.length)) {
                    alert("You need at least on alphabet letter before @")
                } else {
                    let domain = emailRight.split(".")[1]

                    let alldomain = ["com", "de", "org", "net"]
                    if (!alldomain.includes(domain)) {
                        alert("Domain name should be com,org,net or de")
                    } else {
                        setStatus(true)
                    }
                }

            }
        }

    }

    return (

        <div className="contact_form">
            <h3 id="contact_page">Contact Us</h3>
            {status ? <h1>Thanks for your Submission</h1> : <form onSubmit={formSubmission}>
                <label>Name : </label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email :  </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Message :</label>
                <textarea cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} />
                <br />
                <button type="submit" value="Submit" className="button">Submit</button>
            </form>}

        </div>
    );
}


export default Contact;