import Link from 'next/link'
import React from 'react'

const Section4 = () => {
  return (
    <div id='service-section3'>
      <h2>Discover Similar Insights</h2>
      <p>Every day, our experts deliver fresh insights on trending topics, sectors and markets to help you stay ahead of the curve.</p>
      <div className='insights-container'>
        <Link href="/insights/1" className="insight-card">
          <div className="insight-img">
            <img src="https://www.mirabaud.com/fileadmin/_processed_/e/1/csm_increasing-stock-market-graph-with-pen-2023-11-27-05-18-00-utc_8ea647bf76.jpg" alt="insight" />
          </div>
          <span>announcements</span>
          <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
          <span>Jan 9, 2025</span>
        </Link>
        <Link href="/insights/1" className="insight-card">
          <div className="insight-img">
            <img src="https://www.mirabaud.com/fileadmin/_processed_/4/6/csm_stock-market-analysis-on-digital-tablet-2023-11-27-05-11-59-utc_e57b55100d.jpg" alt="insight" />
          </div>
          <span>announcements</span>
          <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
          <span>Jan 9, 2025</span>
        </Link>
        <Link href="/insights/1" className="insight-card">
          <div className="insight-img">
            <img src="https://www.mirabaud.com/fileadmin/_processed_/6/4/csm_shutterstock_216021430_f38f805ffd.jpg" alt="insight" />
          </div>
          <span>announcements</span>
          <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
          <span>Jan 9, 2025</span>
        </Link>
        <Link href="/insights/1" className="insight-card">
          <div className="insight-img">
            <img src="https://www.mirabaud.com/fileadmin/_processed_/3/0/csm_roller-coaster-in-the-amusement-park-with-the-suns-2023-11-27-04-51-38-utc_fcd77d8f41.jpg" alt="insight" />
          </div>
          <span>announcements</span>
          <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
          <span>Jan 9, 2025</span>
        </Link>
        <Link href="/insights/1" className="insight-card">
          <div className="insight-img">
            <img src="https://www.mirabaud.com/fileadmin/_processed_/5/0/csm_shutterstock_2169422435_0ea0ca779e.jpg" alt="insight" />
          </div>
          <span>announcements</span>
          <h2>Vogue’s Vintage Market Is Coming to New York and London </h2>
          <span>Jan 9, 2025</span>
        </Link>
      </div>
    </div>
  )
}

export default Section4