import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section4 = () => {

  const latestInsight = [
    {
      title: "The View From My Window",
      description:
        "2025 is poised to be another pivotal year for the markets, with recovery momentum building across asset classes. After years of volatility, investors are looking ahead with cautious optimism and a focus on sustainable growth. SOME OF THE THINGS TO LOOK OUT FOR IN 2025 COULD BE: What could Trump 2.0 mean for global trade?",
      image: "https://wealthfusion.co.uk/wp-content/uploads/2024/12/view-window-24.jpg",
    },
    {
      title: "Welcome Back Mr President!",
      description:
        "Introduction Donald Trump will become the 47th president of the United States. The past president is only the second person in American history to be re-elected to non-consecutive terms after obtaining the 270 Electoral College votes required. Republicans will restore majority control of the Senate with at least 51 seats while final votes are",
      image: "https://wealthfusion.co.uk/wp-content/uploads/2024/11/Team-PP.jpg",
    },
    {
      title: "Silicon Valley Bank Collapses",
      description:
        "The recent collapse of the Silicon Valley Bank is in alignment with the “Mood of the Month Series” which has emphasized that the only way out of the prevalent debt levels is either through defaults or through high inflation. The same underlying systemic problems became already visible last autumn with the gilt market turmoil. Both […]",
      image: "https://wealthfusion.co.uk/wp-content/uploads/2023/03/silicon-valley-image-1-1024x683.jpg",
    },
    {
      title: "The View From My Window",
      description:
        "2025 is poised to be another pivotal year for the markets, with recovery momentum building across asset classes. After years of volatility, investors are looking ahead with cautious optimism and a focus on sustainable growth. SOME OF THE THINGS TO LOOK OUT FOR IN 2025 COULD BE: What could Trump 2.0 mean for global trade?",
      image: "https://wealthfusion.co.uk/wp-content/uploads/2024/11/The-Labour-Governments-First-Budget.jpg",
    },
  ]

  return (
    <div id='service-section3'>
      <h2>Discover Similar Insights</h2>
      <p>Every day, our experts deliver fresh insights on trending topics, <br />
        sectors and markets to help you stay ahead of the curve.
      </p>
      <div className='insights-container'>
        {latestInsight.map((service, index) => (<Link href={`/insights/${index}`} key={index} className="service-card">
          <div className='img-container'>
            <Image width={1000} height={1000} src={service.image} alt={service.title} />
          </div>
          <div className='desc-service'>
            <div className='card-text-wrap'>
              <h4>{service.title}</h4>
              <p>{service.description.substring(0, 125)}...</p>
            </div>
            <span>Read More</span>
          </div>
        </Link>))}
      </div>
    </div>
  )
}

export default Section4