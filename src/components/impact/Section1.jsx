import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect } from 'react'

const Section1 = () => {

   useEffect(()=>{
      var tl = gsap.timeline();
      tl
      .to('#impact-section1 h2', {
        clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power2.out",
        duration:1.2,
        })
        .to(".impact-banner",{
          transform: "translateY(0)",
          opacity:1,
          duration:.6,
          delay:-1
        })
  
        return () => {
          tl.kill()
        }
  
    },[])

  return (
    <div id='impact-section1'>
        <h2>We are committed to reducing our impact on the planet</h2>
        <div className='impact-banner'>
            <img  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='about-banner'/>
        </div>
    </div>
  )
}

export default Section1