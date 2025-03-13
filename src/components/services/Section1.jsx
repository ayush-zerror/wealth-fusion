import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section1 = () => {

  useEffect(()=>{
    gsap.to('#service-section1 h2', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
            amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
    })
   },[])

  return (
    <div id='service-section1'>
        <h2>Overview</h2>
        <p>At Wealthfusion we are a True Family Office, embedded with rich traditions reminiscent of the Old Private Banker, infused with fresh, creative and bold new ideas.</p>
        <p>We are the only Family Office that offers the full spectrum of services, and a well-defined business model centred around our clients. This means, we are purposefully owned by the families we work with.</p>
    </div>
  )
}

export default Section1