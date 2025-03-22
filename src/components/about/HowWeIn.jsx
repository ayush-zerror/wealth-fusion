import gsap from 'gsap'
import React, { useEffect } from 'react'

const HowWeIn = () => {

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
                <h2>How We Invest</h2>
            </div>
            <div className="right2">
                <p>Everyone is unique. You may be adventurous and inquisitive, with a streak of flamboyance. You could be a maverick with a high-flying persona and powerlifting. You might be cautious but optimistic. You could be dreaming of making a difference in the world around you. You could be a captain sailing the seas, a pilot winging the skies, or a woman preparing to land on the moon. Whatever you may be, you can find a like-minded partner at Wealthfusion, who understands the real you.</p>
                <p>The investments we make are centred around you – we take out the time to understand your plans, implement the strategies, and prioritise your priorities.</p>
                <p>Our investment advisors will be by your side to help you achieve your goals.</p>
            </div>
        </div>
    )
}

export default HowWeIn;