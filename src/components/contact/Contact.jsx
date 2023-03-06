import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { SiLinkedin } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dewocc8', 'template_95399lb', form.current, 'GEwHwVXmIbUCXxZEx')
      
    e.target.reset()
    alert("Message Sent")
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Connect with Email</h5>
            <a href="mailto:asmrdnsingh@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <SiLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Connect with Linked</h5>
            <a href="https://www.linkedin.com/in/d-n-singh-49b85b1b2/" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Connect with Whatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone+916387538464" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your message.." required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;