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
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1639969600391-37bfcb6c79d3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1592208117290-11096f48f1c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1507296950187-9b0c7c88e7af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1737583687210-acec081cbec1?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
            <Link href="/insights/1" className="product-card">
                <div className="product-img">
                    <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
                </div>
                <span>announcements</span>
                <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
                <span>Jan 9, 2025</span>
            </Link>
        </div>
    </div>
  )
}

export default Section2