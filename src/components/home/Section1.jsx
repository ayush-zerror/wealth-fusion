import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section1 = () => {

  useEffect(()=>{
    var tl = gsap.timeline()

    tl
    .to(".overlay-home1 h2",{
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger:{
        amount:0.5
      },
      ease: "power2.out",
      duration:1.2,
    })
    .fromTo(".overlay-home1 button",{
      y:20,
      opacity:0
    },{
      y:0,
      opacity:1,
      duration:.6,
    })

    return () => {
      tl.kill()
    }

  },[])

  return (
    <div id='home-section1'>
      <video autoPlay muted loop playsInline src="/videos/sky.mp4"></video>
      <div className="overlay-home1">
        <h2>Inspire by Legacy,</h2>
        <h2>Designed for Growth.</h2>
        <button>Get in touch now <i class="ri-arrow-right-line"></i></button>
      </div>
    </div>
  )
}

export default Section1