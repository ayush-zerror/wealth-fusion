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
      <h2>Our Services</h2>
      <p>At Wealthfusion, we are a True Family Office, deeply rooted in the rich traditions of the Old Private Banker while embracing fresh, creative, and bold new ideas. Our approach blends heritage with innovation, ensuring our clients receive the best of both worlds.</p>

      <p>We take pride in being the only Family Office that offers a full spectrum of services with a business model centered entirely around our clients. Purposefully owned by the families we serve, we operate with their best interests at heart, fostering trust and long-term partnerships.</p>

      <p>Wealthfusion is a Multi-Family Office in its purest form—fusing old banking traditions built on strong relationships with forward-thinking strategies designed to create lasting wealth. Our foundation is built on the principles of private banking, where personal client relationships are paramount, combined with a modern, contemporary service model.</p>
    </div>
  )
}

export default Section1