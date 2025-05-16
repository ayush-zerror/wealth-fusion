import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect } from 'react'

const Section1 = () => {

   useEffect(()=>{
      var tl = gsap.timeline();
      tl
        .set("#impact-section1", {
      y: -50,
    })
      .to("#impact-section1", {
        opacity: 1,
        y: 0,
        duration: 1.6,
      })
      .to('#impact-section1 h2', {
        clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
        // delay: .1
        })
        return () => {
          tl.kill()
        }

    },[])

  return (
    <div id='impact-section1'>
      <div className='impact-overlay1'>
        <div className='impact-title-wrap'>
          <h2>Invest with Confidence,</h2>
          <h2>Grow with Purpose.</h2>
        </div>
      </div>
      <div className='impact-banner'>
        <Image width={1000} priority height={1000} src="/images/ig7.webp" alt='about-banner' />
      </div>
    </div>
  )
}

export default Section1