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
                    end: "top -150%",
                    // markers: true,
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to(containerRef2.current.querySelectorAll(".container-section5-slide"), {
                top: "0%",
                stagger: { amount: 1 },
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
                        <img src='https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='section5' />
                    </div>
                </div>
                <div className='container-section5-imp container-section5-slide '>
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
                <div className='container-section5-imp container-section5-slide'>
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
                        <img src='https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='section5' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section5;