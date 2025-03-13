import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section2 = () => {

   useEffect(()=>{
    gsap.to('#impact-section2 h2', {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
            amount: 0.5
        },
        ease: "power2.out",
        duration: 1.2,
        scrollTrigger: {
            trigger: "#impact-section2 h2",
            scroller: "body",
            start: "top 80%",
            end: "top 60%",
            // markers:true,
        }
    })
   },[])

    return (
        <div id='impact-section2'>
            <div className="left2">
                <h2>Our Sustainability </h2>
                <h2>Mission</h2>
            </div>
            <div className="right2">
                <p>We believe that we have a duty to deliver the highest quality content and experiences expected from our brands and to do so in a way that reduces our impact on the planet.</p>
                <p>We commit to playing a proactive and meaningful role in informing our readers about the climate emergency and inspiring them to take practical actions, working with partners to foster tangible change.</p>
                <p>We pledge to deliver systemic change throughout all levels of our organization, and to ensure that our content is always scientifically robust and accurate.</p>
            </div>
        </div>
    )
}

export default Section2