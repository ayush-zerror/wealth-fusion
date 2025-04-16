import { Services } from '@/helpers/Services';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = ({ isHome }) => {

    return (
        <div id='service-section2'>
            {isHome && <>
                <h2>Our Services</h2>
                <p>At Wealthfusion, we are a True Family Office, deeply rooted in the rich traditions of the Old Private Banker while embracing fresh, creative, and bold new ideas. Our approach blends heritage with innovation, ensuring our clients receive the best of both worlds.</p>
            </>}
            <div className="service-container">
                {(isHome ? Services.slice(0, 3) : Services).map((service, index) => (
                    <Link href="/contact" key={index} className="service-card">
                        <div className='img-container'>
                            <Image width={1000} height={1000} src={service.image} alt={service.title} />
                        </div>
                        <div className='desc-service'>
                            <div className='card-text-wrap'>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                            <span>Contact</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='explore-btn-wrap'>
                <Link href="/services" className="explore-btn">
                    Explore All Services
                </Link>
            </div>
        </div>
    )
}

export default Section2;