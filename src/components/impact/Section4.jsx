import Image from 'next/image'
import React from 'react'

const Section4 = () => {
    return (
        <div id='about-section5'>
            <h2>Investment Philosophy</h2>
            <div className='container-section5'>
                <div className="text-container">
                    <h4>Strategic Wealth Growth Through Measured Risk</h4>
                    <p>Our philosophy is centred on
                        protecting and growing your assets
                        by taking measured risks through a
                        combination of traditional and
                        alternative investments. We focus on
                        long-term capital growth by carefully
                        selecting and allocating financial
                        instruments, prioritising a balanced
                        mix of safety, risk, and return.</p>
                </div>
                <div className="img-container">
                    <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/WFHEADER-Recovered.jpg?id=617' width={1000} height={1000} alt='section5' />
                </div>
            </div>
            <div className='container-section5'>
                <div className="img-container">
                    <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/AdobeStock_328877378.jpg?id=533' width={1000} height={1000} alt='section5' />
                </div>
                <div className="text-container text-container2">
                    <h4>Diversified, Global, and Tailored Investment Strategies</h4>
                    <p>Our strategy emphasises
                        diversification across sectors and
                        regions, encompassing a variety of
                        asset classes in both developed
                        and emerging markets. Our open
                        architecture approach allows us to
                        offer innovative, tailored portfolio
                        solutions, selecting the best
                        products available in the market</p>
                </div>
            </div>
            <div className='container-section5'>
                <div className="text-container">
                    <h4>Strategic Wealth Growth Through Measured Risk</h4>
                    <p>Our philosophy is centred on
                        protecting and growing your assets
                        by taking measured risks through a
                        combination of traditional and
                        alternative investments. We focus on
                        long-term capital growth by carefully
                        selecting and allocating financial
                        instruments, prioritising a balanced
                        mix of safety, risk, and return.</p>
                </div>
                <div className="img-container">
                    <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/WFHEADER-Recovered.jpg?id=617' width={1000} height={1000} alt='section5' />
                </div>
            </div>
        </div>
    )
}

export default Section4;