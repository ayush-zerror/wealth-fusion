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
      },"a")
      .to(".side2 span",{
        opacity:.7,
        duration:.2,
      },"a")
      .to("#insight-section1 h2", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
      },"a")
  }, [])

  return (
    <div id='insight-section1'>
      <h4>Where Wealth Meets Wisdom.</h4>
      <div className='insight-sec1'>
        <div className="side1">
          <Image width={1000} height={1000} src="/images/ig10.webp" alt="insight1"/>
        </div>
        <div className="side2">
          <span>announcements</span>
          <div>
            <h2>Financial Growth Through Strategic Acquisitions</h2>
            <h2>and  Market Expansion</h2>
          </div>
          <span>Jan 9, 2025</span>
        </div>
      </div>
    </div>
  )
}

export default Section1