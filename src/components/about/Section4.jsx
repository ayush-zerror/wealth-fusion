import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#approach",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        // markers:true,
      }
    })
    tl
      .to("#approach h2", {
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
    <div id='approach'>
      <div className="pt2">
        <h2>Our Blueprint</h2>
        <p>Wealthfusion is a Multi Family Office in its most traditional form. We – fuse epoch-defining values and strong personal relationships with bold futuristic ideas and wealth creation strategies defined to create long-term, sustained results for our clients.</p>
        <p>We do not use the term ‘traditional’ loosely. Wealthfusion is built from the silhouette of good old private banking, the kind of which places the upmost importance on personable client kinship in homage of the true historic values of wealth management, combining this with forward-thinking contemporary service models.</p>
      </div>
      <div className='pt1'>
        <Image width={1000} height={1000} src="/images/ig3.webp" alt='background-img' />
      </div>
    </div>
  )
}

export default Section4