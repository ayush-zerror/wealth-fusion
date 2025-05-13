import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Section1 = () => {

  useEffect(() => {
    var tl = gsap.timeline()

    tl
      .to(".overlay-home1 .home-title", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
        delay: .1
      })
      .fromTo(".overlay-home1 a", {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: .6,
      })

    return () => {
      tl.kill()
    }

  }, [])

useGSAP(() => {
  let index = 0;
  const title1 = document.querySelectorAll(".home-title1 h2");
  const title2 = document.querySelectorAll(".home-title2 h2");

  if (title1.length === 0 || title2.length === 0) return;

  const animateTitles = () => {
    const current1 = title1[index];
    const next1 = title1[(index + 1) % title1.length];

    const current2 = title2[index];
    const next2 = title2[(index + 1) % title2.length];

    // Reset next elements below
    gsap.set([next1, next2], { top: "100%" });

    // Animate current out
    gsap.to([current1, current2], {
      top: "-100%",
      ease: "power2.inOut",
      duration: 0.8,
    });

    // Animate next in
    gsap.to([next1, next2], {
      top: "0%",
      ease: "power2.inOut",
      duration: 0.8,
      delay: 0.2,
      onComplete: () => {
        index = (index + 1) % title1.length;
        gsap.delayedCall(1.8, animateTitles); // Ensures full animation cycle completes
      },
    });
  };

  animateTitles(); // Start the loop
}, []);




  return (
    <div id='home-section1'>
      <video autoPlay muted loop playsInline src="/videos/skyline.mp4"></video>
      <div className="overlay-home1">
        <div className='home-title home-title1'>
          <h2>Inspired by Legacy,</h2>
          <h2>Smart Strategies.</h2>
          <h2>Invest with Confidence,</h2>
        </div>
        <div className='home-title home-title2'>
          <h2>Designed for Growth.</h2>
          <h2>Lasting Wealth.</h2>
          <h2>Grow with Purpose.</h2>
        </div>
        <Link href="/about">Discover More <i className="ri-arrow-right-line"></i></Link>
      </div>
    </div>
  )
}

export default Section1