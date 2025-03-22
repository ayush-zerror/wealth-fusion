import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Approach = () => {

  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section4",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        // markers:true,
      }
    })
    tl
      .to("#about-section4 h2", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
      })
    return () => {
      tl.kill()
    }

  }, [])

  return (
    <div id='about-section4' className='approach-section'>
      <div className="pt2">
        <h2>OurApproach</h2>
        <p>At WealthFusion, our approach to wealth management is deeply rooted in cultivating long-term partnerships and making it more personal. We believe that once we truly understand your unique circumstances and aspirations, we can create a bespoke solution that aligns with your goals and aspirations.</p>
        <p>In a landscape where many firms are shifting toward standardizing their products and services, we have purposefully looked away to maintain our independence and offer tailored advice that fits your personal values and priorities. We recognize that no financial decision is easy, and every choice can significantly influence the financial outcomes for you and your family.</p>
        <p>Be it expanding your business, planning for your family’s future, or leaving a lasting legacy, our role is to be on your side, helping you navigate these difficult decisions with confidence and ensuring that your financial plan evolves with changing circumstances. Whether you’re considering moving abroad, purchasing a new home, or planning for your children’s education, we stand by your side, continuously refining your plan to meet your needs.</p>
        <p>Our commitment extends beyond the present, focusing on providing stability and continuity for future generations.</p>
      </div>
      <div className='pt1'>
        <Image width={1000} height={1000} src="/bigLogo.png" alt='background-img' />
      </div>
    </div>
  )
}

export default Approach;