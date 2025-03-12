import React from 'react'

const Section1 = () => {
  return (
    <div id='home-section1'>
      <video autoPlay muted loop playsInline src="/videos/sky.mp4"></video>
      <div className="overlay-home1">
        <h2>Inspire by Legacy, <br />
        Designed for Growth.</h2>
        <button>Get in touch now <i class="ri-arrow-right-line"></i></button>
      </div>
    </div>
  )
}

export default Section1