import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Section5 = () => {

    useEffect(() => {
        gsap.to('#about-section5 h2', {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            stagger: {
                amount: 0.5
            },
            ease: "power2.out",
            duration: 1.2,
            scrollTrigger: {
                trigger: "#about-section5 h2",
                scroller: "body",
                start: "top 80%",
                end: "top 60%",
                // markers:true,
            }
        })
        var textContainer = document.querySelectorAll('.container-section5');
    
        textContainer.forEach((container) => {
            gsap.to(container.querySelectorAll('.text-container h4'), {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                stagger: {
                    amount: 0.5
                },
                ease: "power2.out",
                duration: 1.2,
                scrollTrigger: {
                    trigger: container,
                    scroller: "body",
                    start: "top 60%",
                    end: "top 30%",
                    // markers: true,
                }
            });
        });
    }, [])

    return (
        <div id='about-section5'>
            <h2>Investment Philosophy</h2>
            <div className='container-section5'>
                <div className="text-container">
                    <h4>Strategic Wealth Growth Through</h4>
                    <h4>Measured Risk</h4>
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
                    <h4>Diversified, Global, and</h4>
                    <h4>Tailored Investment Strategies</h4>
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
        </div>
    )
}

export default Section5