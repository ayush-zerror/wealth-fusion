import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Section2 = ({data}) => {

    const router = useRouter();
    const { filterby } = router.query;

    const filters = ['all', 'announcements', 'coverage', 'archive'];
    const [activeFilter, setActiveFilter] = useState(filterby || 'all');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        router.push(`?filterby=${filter}`, undefined, { shallow: true });
    };

    return (
        <div id='insight-section2'>
            <div className='filters'>
                {filters.map((filter) => (
                    <div className="options" key={filter} onClick={() => handleFilterClick(filter)}>
                        <span className={activeFilter === filter ? 'active' : ''}>{filter}</span>
                    </div>
                ))}
            </div>
            <div className='product-container'>
                {data.map((service, index) => (<Link href={`/insights/${index}`} key={index} className="service-card">
                    <div className='img-container'>
                        <Image width={1000} height={1000} src={service.image} alt={service.title} />
                    </div>
                    <div className='desc-service'>
                        <div className='card-text-wrap'>
                            <h4>{service.title}</h4>
                            <p>{service.description.substring(0,125)}...</p>
                        </div>
                        <span>Read More</span>
                    </div>
                </Link>))}
            </div>
        </div>
    )
}

export default Section2