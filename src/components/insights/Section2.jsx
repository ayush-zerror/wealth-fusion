import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Section2 = () => {

    const router = useRouter();
    const { filterby } = router.query;
    
    const filters = ['all', 'announcements', 'coverage', 'people'];
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
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/Announcement_Gigi_App_441e1ec10f.webp" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/unnamed_7a89812343.png" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/Claire_Hazan_Kate_Fichard_58ee1b2f70.jpg" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/05_Newyorker_archive_01_cthq_super_Jumbo_780817e120.webp" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/image3_9554e5546b.gif" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/image5_a6f0dc14d8.gif" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/image12_838f3fa5f7.gif" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
            <div className="product-card">
                <div className="product-img">
                    <img src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/Announcement_Gigi_App_441e1ec10f.webp" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </div>
        </div>
    </div>
  )
}

export default Section2