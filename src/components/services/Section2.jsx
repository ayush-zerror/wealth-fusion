import { Services } from '@/helpers/Services';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {

    return (
        <div id='service-section2'>
            <div className="service-container">
                {Services.map((service, index) => (<Link href="/contact" key={index} className="service-card">
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
                </Link>))}
            </div>
        </div>
    )
}

export default Section2;