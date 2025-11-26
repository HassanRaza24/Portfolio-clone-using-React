import React from 'react'
import './contact.css'
import download from '../../assets/download.svg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={download} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>Hr373073@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>+92 309-4049589</p>
            </div>
            <div className="contact-detail">
              <p>Gulshan-e-Ravi, LHR</p>
            </div>
          </div>
        </div>
        <form action="" className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email'/>
          <label htmlFor="">Your Message</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact