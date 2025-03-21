import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section1 = () => {

  useEffect(() => {
    gsap.to('#service-section1 h2', {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: {
        amount: 0.5
      },
      ease: "power2.out",
      duration: 1.2,
    })
  }, [])

  return (
    <div id='service-section1'>
      <div id='service-section1-over'></div>
      
      <h2>Our Services</h2>
      <p>At Wealthfusion, we are a True Family Office, deeply rooted in the rich traditions of the Old Private Banker while embracing fresh, creative, and bold new ideas. Our approach blends heritage with innovation, ensuring our clients receive the best of both worlds.</p>
    </div>
  )
}

export default Section1