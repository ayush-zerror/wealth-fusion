import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <div id='about-section1'>
        <h2>Personalised Wealth, Trusted Guidance</h2>
        <div className='about-banner'>
            <Image width={1000} height={1000} src="https://wealthfusion.co.uk/wp-content/uploads/2020/11/ho.jpg" alt='about-banner'/>
        </div>
    </div>
  )
}

export default Section1