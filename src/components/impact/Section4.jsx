import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section4 = () => {

    useEffect(() => {
        gsap.to('#impact-section5 h2', {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            stagger: {
                amount: 0.5
            },
            ease: "power2.out",
            duration: 1.2,
            scrollTrigger: {
                trigger: "#impact-section5 h2",
                scroller: "body",
                start: "top 80%",
                end: "top 60%",
                // markers:true,
            }
        })
        var textContainer = document.querySelectorAll('.container-section5-imp');
    
        textContainer.forEach((container) => {
            gsap.to(container.querySelectorAll('.text-container-imp h4'), {
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
        <div id='impact-section5'>
            <h2>Investment Philosophy</h2>
            <div className='container-section5-imp'>
                <div className="text-container-imp">
                    <h4>Strategic Wealth Growth Through</h4>
                    <h4> Measured Risk</h4>
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
                <div className="img-container-imp">
                    <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/WFHEADER-Recovered.jpg?id=617' width={1000} height={1000} alt='section5' />
                </div>
            </div>
            <div className='container-section5-imp'>
                <div className="img-container-imp">
                    <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/AdobeStock_328877378.jpg?id=533' width={1000} height={1000} alt='section5' />
                </div>
                <div className="text-container-imp text-container2">
                    <h4>Diversified, Global, and Tailored</h4>
                    <h4>Investment Strategies</h4>
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
            <div className='container-section5-imp'>
                <div className="text-container-imp">
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
                <div className="img-container-imp">
                    <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/WFHEADER-Recovered.jpg?id=617' width={1000} height={1000} alt='section5' />
                </div>
            </div>
        </div>
    )
}

export default Section4;