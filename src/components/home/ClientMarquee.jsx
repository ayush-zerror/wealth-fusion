import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const ClientMarquee = () => {

    const clients = [
        "/logos/amadeus.png",
        "/logos/arithma.png",
        "/logos/coleridge.png",
        "/logos/easy.png",
        "/logos/efg.png",
        "/logos/fidelis.png",
        "/logos/jj.png",
        "/logos/kepler.png",
        "/logos/leon.png",
        "/logos/lfa.png",
        "/logos/marex.png",
        "/logos/ob.png",
        "/logos/pure.png",
        "/logos/standard.png"
    ]

    useEffect(() => {
        if (window.innerWidth < 575) return;
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about-section2",
                scroller: "body",
                // markers:true,
                start: "top 60%",
                end: "top 50%",
                scrub: 1
            }
        })
        tl
            .fromTo("#about-section2 p", {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .6
            })

        return () => {
            tl.kill()
        }
    }, [])
    return (
        <div id='about-section2' className='client-marquee'>
            <div className="marque">
                <div className="marque-about">
                    {
                        clients.map((client, index) => (
                            <Image key={index} src={client} alt="Marque" width={1000} height={1000} />
                        ))
                    }
                </div>
                <div className="marque-about">
                    {
                        clients.map((client, index) => (
                            <Image key={index} src={client} alt="Marque" width={1000} height={1000} />
                        ))
                    }
                </div>
            
            </div>
        </div>
    )
}

export default ClientMarquee;