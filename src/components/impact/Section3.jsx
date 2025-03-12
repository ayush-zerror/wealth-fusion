import Image from 'next/image'
import React from 'react'

const Section3 = () => {
    return (
        <div id='impact-section3'>
            <div className="pt1">
                <Image src="https://wealthfusion.co.uk/wp-content/uploads/2020/11/AdobeStock_328877378.jpg?id=533" width={1000} height={1000} alt="banner" />
            </div>
            <div className="pt2">
                <h2>Making Condé Nast Greener</h2>
                <p>At WealthFusion, our approach to wealth management
                    is deeply rooted in cultivating long-term partnership and making
                    it more personal. We believe that once we truly understand your
                    unique circumstances and aspirations, we can create a bespoke
                    solution that aligns with your goals and aspirations. </p>
                <p>In a landscape where many firms are shifting toward
                    standardising their products and services, we have purposefully
                    looked away to maintain our independence and oer tailored
                    advice that fits your personal values and priorities.</p>
                <p>We recognise that no financial decision is easy and every
                    decision can significantly influence the financial outcomes for
                    you and the family. Be it expanding your business to planning for
                    your family’s future or leaving a lasting legacy. Our role is to be on
                    your side and help you navigate these dicult decisions with
                    confidence and ensure that your financial plan evolves with
                    changing circumstances. Whether you’re considering moving
                    abroad, purchasing a new home, or planning for children’s
                    education, we stand by your side, continuously refining your plan
                    to meet your needs.
                </p>
                <p>Our commitment extends beyond the present, focusing on
                    providing stability and continuity for future generations. </p>
            </div>
        </div>
    )
}

export default Section3;