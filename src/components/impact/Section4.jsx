import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
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

    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;
    
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                scroller: "body",
                start: "top top",
                end: "top -150%",
                pin: true,
                scrub: 1,
            }
        });
    
        tl.to(gsap.utils.toArray(".container-section5-slide"), {
            top: "0%",
            stagger: { amount: 1 },
            duration: 1,
        });
    
        // Ensure ScrollTrigger recalculates after mount
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    
        return () => {
            if (tl) tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (
        <div ref={containerRef}  id='impact-section5'>
            <h2>WF Give Back Day</h2>
            <div className='container-section5-wrapper'>
                <div className='container-section5-imp container-section5-imp1 '>
                    <div className="text-container-imp">
                        <h4>Touching a million lives does not </h4>
                        <h4>need a million. It just needs one’s will.</h4>
                        <p>The WF Give Back Day is the most important day on our calendar – an annual moment that involves our global team and invites all our clients to join us in supporting our communities and society.</p>
                        <p>True to our core founding values, the WF Give Back Day embodies the best of who we are – helping the world grow with us. As part of the WF Give Back Day, we pledge to donate the entire revenue generated from this day to the charities and causes we support.</p>
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
                        <h4>Supporting Community at</h4>
                        <h4>the Dragon Boat Event</h4>
                        <p>Delighted to have sponsored the Sense College Boat at The Rotary Club of Wolverhampton Dragon Boat Event, a fun-filled program aimed at raising funds for charitable causes. We are committed to supporting the community and making a positive impact.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section4;