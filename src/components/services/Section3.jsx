import { Services } from '@/helpers/Services';
import Image from 'next/image'
import React from 'react'

const Section3 = () => {

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