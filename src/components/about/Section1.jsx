import Image from 'next/image'
import React  from 'react'

const Section1 = () => {
  // useEffect(()=>{
  //   var tl = gsap.timeline();
  //   tl
  //   .to('#about-section1 h2', {
  //     clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  //     ease: "power2.out",
  //     duration:1.2,
  //     })
  //     .to(".about-banner",{
  //       transform: "translateY(0)",
  //       opacity:1,
  //       duration:.6,
  //       delay:-1
  //     })

  //     return () => {
  //       tl.kill()
  //     }

  // },[])
  return (
    <div id='about-section1'>
        {/* <h2>Personalised Wealth, Trusted Guidance</h2> */}
        <div className='about-banner'>
            <img src="https://images.unsplash.com/photo-1534374950034-3644ddb72710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='about-banner'/>
        </div>
    </div>
  )
}

export default Section1