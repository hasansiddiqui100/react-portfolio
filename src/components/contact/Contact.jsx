import { useState } from "react";

import "./contact.scss"

export default function Contact() {
    const [message,setMessage]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">send</button>
                    {message && <span>Thanks i will reply asap</span>}
                </form>
            </div>
        </div>
    )
}
