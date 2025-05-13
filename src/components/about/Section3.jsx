import { Committee, Team } from '@/helpers/Team'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {

    useEffect(() => {
        var headings = document.querySelectorAll("#team h2")
        headings.forEach((h) => {
            gsap.to(h, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                stagger: {
                    amount: 0.5
                },
                ease: "power2.out",
                duration: 1.2,
                scrollTrigger: {
                    trigger: h,
                    scroller: "body",
                    start: 'top 70%',
                    end: "top 60%",
                    // markers:true,
                    // scrub:1
                },
            })
        })
    }, [])

    return (
        <div id='team'>
            <h2>The Team</h2>
            <div className='team-container'>
                {Team.map((member, index) => (<div key={index} className="member">
                    <div className={`profile ${index === 1 ? 'unfilter':index === 5 ? 'unfilter' : index === 9 ? 'unfilter':''} `}>
                        <Image width={1000} height={1000} src={member.image} alt={member.name} />
                    </div>
                    <div className='name-container'>
                        <h4>{member.name}</h4>
                        <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
                    </div>
                    <div className='tag'>
                        <p>{member.role}</p>
                    </div>
                    <p>{member.bio}</p>
                </div>))}

            </div>
            <h2>Risk Committee</h2>
            <div className='team-container'>
                {Committee.map((member, index) => (<div key={index} className="member">
                    <div className='profile'>
                        <Image width={1000} height={1000} src={member.image} alt={member.name} />
                    </div>
                    <div className='name-container'>
                        <h4>{member.name}</h4>
                        <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
                    </div>
                    <div className='tag'>
                        <p>{member.role}</p>
                    </div>
                    <p>{member.bio}</p>
                </div>))}

            </div>
        </div>
    )
}

export default Section3