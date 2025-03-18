import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section1 = () => {

  useEffect(()=>{
    gsap.to(".contact-img",{
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration:.6
    })
  },[])

  return (
    <div id='contact-section1'>
      <div className="contact-left">
        <h2>We’d love to <br />
          hear from you. <br />
          Contact us.</h2>
        <div className="contact-img">
          <img src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact" />
        </div>
      </div>
      <div className="contact-right">
        <h2>Get started today.</h2>
        <form action="">
          <div className='input-container'>
            <label htmlFor="Full Name">Email</label>
            <input type="text" placeholder='Full Name' />
          </div>
          <div className='input-wrapper'>
            <div className='input-container'>
              <label htmlFor="Phone">Phone</label>
              <input type="text" placeholder='Phone' />
            </div>
            <div className='input-container'>
              <label htmlFor="Email">Email</label>
              <input type="text" placeholder='Email' />
            </div>
          </div>
          <div className='input-container'>
            <label htmlFor="Message">Message</label>
            <textarea name="Message" id="Message" placeholder='Message'></textarea>
          </div>
          <button id='submit-btn'>Contact Us</button>
        </form>
      </div>
    </div>
  )
}

export default Section1