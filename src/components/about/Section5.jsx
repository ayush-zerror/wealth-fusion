import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section5 = () => {

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
                start: "top 85%",
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

    const containerRef2 = useRef(null);

    useGSAP(() => {
        if (!containerRef2.current) return;
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef2.current,
                    scroller: "body",
                    start: "top 0%",
                    end: "top -400%",
                    // markers: true,
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to(containerRef2.current.querySelectorAll(".container-section5-slide"), {
                top: "0%",
                stagger: { amount: 3 },
                duration: 1,
            });


        return () => {
            tl.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); 
        };
    }, []);

    return (
        <div ref={containerRef2}  id='impact-section5'>
            <h2>Investment Philosophy</h2>
            <div className='container-section5-wrapper'>
                <div className='container-section5-imp container-section5-imp1 '>
                    <div className="text-container-imp">
                        <h4>Integrated Solutions</h4>
                        <p>A one-stop solution provider for all of our clients’ financial and non-financial needs, spanning portfolio management, wealth planning, ESG-responsible investing, all handheld by subject matter experts.</p>
                    </div>
                    <div className="img-container-imp">
                        <img src='https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='section5' />
                    </div>
                </div>
                <div className='container-section5-imp container-section5-slide '>
                    <div className="img-container-imp">
                        <Image src='https://wealthfusion.co.uk/wp-content/uploads/2020/11/AdobeStock_328877378.jpg?id=533' width={1000} height={1000} alt='section5' />
                    </div>
                    <div className="text-container-imp text-container2">
                        <h4>Multi-Family Office</h4>
                        <p>Providing UHNW families with bespoke services in Estate & Succession Planning, Risk Management, Financial Counsel, Wealth, and other administrative services.</p>
                    </div>
                </div>
                <div className='container-section5-imp container-section5-slide'>
                    <div className="text-container-imp">
                        <h4>Emotional Intelligence</h4>
                        <p>We recognise that our clients are unique in how they operate their businesses, but most importantly in the way they think, feel and act. At Wealthfusion, we operate not only with a focus on strategies that drive financial returns, but also with Optimised Emotional Intelligence to connect strategy with Creativity, Relationships with Aspirations, Centred Around our Client Goals.</p>
                    </div>
                    <div className="img-container-imp">
                        <img src='https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='section5' />
                    </div>
                </div>
                <div className='container-section5-imp container-section5-slide'>
                <div className="img-container-imp">
                        <img src='https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='section5' />
                    </div>
                    <div className="text-container-imp text-container2">
                        <h4>High Quality Service and</h4>
                        <h4>Personalisation</h4>
                        <p>Our business approach is rooted in the principles of segmented marketing, which allows us to deliver the right message, with the right product, to the right person, at the right time. This ensures our investments are not only tailored to our client’s requirements, their businesses and their market sectors, but also remain fluid, flexible and adaptable, to work in line with their individual and wider market trends.</p>
                    </div>
                </div>
                <div className='container-section5-imp container-section5-slide'>
                    <div className="text-container-imp">
                        <h4>Asset Re-structuring</h4>
                        <p>In a world of complex tax regimes, all Wealthfusion investment management discussions begin with asset structuring for our client’s household.  Our team of investment managers are here to constantly manage and review regulatory guidelines and developments across international jurisdictions, to keep your international portfolio compliant and agile to deliver you the best possible results</p>
                    </div>
                    <div className="img-container-imp">
                        <img src='https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='section5' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section5;