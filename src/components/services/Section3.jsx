import { Services } from '@/helpers/Services';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {

    useEffect(()=>{
        gsap.to('#service-section3 h2', {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            stagger: {
                amount: 0.5
            },
            ease: "power2.out",
            duration: 1.2,
            scrollTrigger: {
                trigger: "#service-section3 h2",
                scroller: "body",
                start: "top 80%",
                end: "top 60%",
                // markers:true,
            }
        })
       },[])

    return (
        <div id='service-section3'>
            <h2>Our Offering</h2>
            <div className="service-container">
                {Services.map((service, index) => (<div key={index} className="service-card">
                    <div className='img-container'>
                        <Image width={1000} height={1000} src={service.image} alt={service.title} />
                    </div>
                    <div className='desc-service'>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                        <button>Learn more</button>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Section3;