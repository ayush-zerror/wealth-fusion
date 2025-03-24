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
            start: "top 85%",
            end: "top 60%",
            // markers:true,
        }
    })
   },[])

    return (
        <div id='impact-section2'>
            <div className="left2">
                <h2>Responsible Investments,</h2>
                <h2> Remarkable Results.</h2>
            </div>
            <div className="right2">
                <p>At Wealthfusion, we share your ambitions for making a positive impact to the people and the planet.</p>
                <p>Our team of dedicated ESG advisors will guide you in making the best investment decisions that are compliant to the highest Environment, Social and Governance standards, while at the same time propelling you towards the same results as any conventional portfolio. By taking well-calculated and analytical decisions, your investments will not only provide potential positive returns, but directly stand to impact the lives and livelihoods of millions of people across the world for the better. This is truly investing in the future of our world and generations to come. If you are passionate about any specific cause, our team will work with you in helping you make a difference through the necessary financial instruments.</p>
                <p>We offer a range of funds targeting sustainable performance though higher ESG credentials – aiming at achieving the biggest impact and maximum performance.</p>
            </div>
        </div>
    )
}

export default Section2