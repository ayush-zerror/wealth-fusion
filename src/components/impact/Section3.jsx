import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {

    useEffect(() => {
        gsap.to('#impact-section3 h2', {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            stagger: {
                amount: 0.5
            },
            ease: "power2.out",
            duration: 1.2,
            scrollTrigger: {
                trigger: "#impact-section3 h2",
                scroller: "body",
                start: "top 80%",
                end: "top 60%",
                // markers:true,
            }
        })
    }, [])

    return (
        <div id='impact-section3'>

            <div className="pt2">
                <h2>Making WealthFusion</h2>
                <h2 className='sec-h2'>Greener</h2>
                <p>At WealthFusion, supporting our communities and society is at the heart of everything we do. Staying true to our core founding values, we strive to embody the best of who we are—helping the world grow alongside us. As part of our commitment to social responsibility, we pledge to donate to charities and causes we believe in. We take great pride in championing initiatives that create meaningful impacts in the lives of those we support.</p>
                <p>In Q2 2024, we sponsored Sense, a remarkable charity dedicated to assisting individuals with complex disabilities and deaf blindness. Sense addresses various disabilities, including deafness/hearing impairment, blindness or vision impairment, learning disabilities, and autism.</p>
                <p>Throughout 2023 & 2024, we have been the proud sponsors of the U7 & U8 Football teams of the Pitshanger Football Club (PFC), a renowned volunteer-led club that emphasizes accessibility, well-being, diversity, and inclusivity. The club caters to players of all ages, genders, and abilities, aiming to be a true community hub in the London Borough of Ealing.</p>

            </div>
            <div className="pt1">
                <Image src="/bigLogo.png" width={1000} height={1000} alt="banner" />
            </div>

        </div>
    )
}

export default Section3;