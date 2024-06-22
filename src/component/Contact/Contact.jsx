import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
    return (
        <div id='contact' className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>
                        It is very important for the customer to pay attention to the adipiscing process. The flight of his choice in the painstaking selection of the finder, otherwise we lead something.
                    </p>
                    <p className={styles.contact_address}>
                        123 Main Street <br />
                        Bangkok, Thailand
                    </p>
                    <p><FaPhone /> (+66) 97 918 7993</p>
                    <p><FaEnvelope /> jiranon46@gmail.com</p>
                </div>
                <div className={styles.contact_form}>
                    <form action="">
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="first name">First Name</label>
                                <input type="text" placeholder='eg. John'  id='firstname'/>
                            </div>
                            <div>
                                <label htmlFor="last name">Last Name</label>
                                <input type="text" placeholder='eg. Doe' id='lastname' />
                            </div>
                        </div>
                        <label htmlFor="email address" >Email address</label>
                        <input type="email" placeholder='eg. john@gmail.com' id='email' />
                        <label htmlFor="email address">Your message</label>
                        <textarea name="" id="message" cols="30" rows="10" placeholder='Type here'></textarea>
                        <button type='submit' onClick={SendMail()}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )       
}





export default Contact
