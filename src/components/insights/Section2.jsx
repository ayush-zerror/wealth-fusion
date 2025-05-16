import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Section2 = ({data}) => {

    const router = useRouter();
    const { filterby } = router.query;

    const filters = ['all','coverage', 'archive'];
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
                {data.map((insight, index) => (<Link href={`/insights/${insight?.slug}`} key={index} className="service-card">
                    <div className='img-container'>
                        <Image width={1000} height={1000} src={insight?.thumbnail} alt={insight?.title} />
                    </div>
                    <div className='desc-service'>
                        <div className='card-text-wrap'>
                            <h4>{insight?.title.substring(0,30)}...</h4>
                            <p>{`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero reprehenderit ipsa in mollitia repudiandae dolorem dicta numquam ex, saepe iusto. Quaerat maiores unde illo voluptas, ad omnis mollitia id, suscipit ratione itaque enim illum ipsa vitae. Animi reiciendis earum saepe laboriosam. Expedita excepturi doloremque, labore accusamus sed minus nemo aperiam et. A dicta numquam sapiente sequi earum illum dignissimos neque`.substring(0,105)}...</p>
                        </div>
                        <span>Read More</span>
                    </div>
                </Link>))}
            </div>
        </div>
    )
}

export default Section2