import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {

    useEffect(()=>{
        gsap.to('#service-section2 h2', {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            stagger: {
                amount: 0.5
            },
            ease: "power2.out",
            duration: 1.2,
        })
       },[])

    return (
        <div id='service-section2'>
            <h2>Our Services</h2>
            <p>Wealthfusion is a Multi Family Office in its purest form – the fusion of the old banking traditions centred around strong relationships combined with new ideas and strategies aimed at creating long-term wealth for clients.</p>
            <p>We are built on the foundation of traditions of the good old private banking, the kind which places the upmost importance on personable client kinship and brings with it a forward-thinking contemporary service model.</p>
        </div>
    )
}

export default Section2