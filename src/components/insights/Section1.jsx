import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Section1 = () => {

  useEffect(() => {
    var tl = gsap.timeline()
    tl
      .to("#insight-section1 h4", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
      })
      .to(".side2 span",{
        opacity:.7,
        duration:.2,
      })
      .to("#insight-section1 h2", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
      })
  }, [])

  return (
    <div id='insight-section1'>
      <h4>Coverage around the world</h4>
      <div className='insight-sec1'>
        <div className="side1">
          <img src="https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="insight1" width={1000} height={1000} />
        </div>
        <div className="side2">
          <span>announcements</span>
          <div>
            <h2>Vogue Arabia and GQ Middle East Join Condé</h2>
            <h2>Nast Owned and Operated Portfolio</h2>
          </div>
          <span>Jan 9, 2025</span>
        </div>
      </div>
    </div>
  )
}

export default Section1