import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() { 

    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_m1u0p99', 'template_o0oyfn3', e.target, {
                publicKey: 'Z12sie7-3-23t2XvC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

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
                <div className={styles.contact_form} >

                    <form className='form' onSubmit={sendEmail} >
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="first name">First Name</label>
                                <input type="text" name='firstname' placeholder='eg. John' />
                            </div>
                            <div>
                                <label htmlFor="last name">Last Name</label>
                                <input type="text" name='lastname' placeholder='eg. Doe' />
                            </div>
                        </div>
                        <label htmlFor="email address">Email address</label>
                        <input type="email" name='user_email' placeholder='eg. johndoe@gmail.com' />
                        <label htmlFor="email address">Your message</label>
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                        <button type='submit' value="Send" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
   )
}

export default Contact
