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
            <Image width={1000} height={1000} src="https://wealthfusion.co.uk/wp-content/uploads/2020/11/sky.jpg?id=345" alt='about-banner'/>
        </div>
    </div>
  )
}

export default Section1