import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {

    const clients = [
        "/logos/amadeus.png",
        "/logos/arithma.png",
        "/logos/coleridge.png",
        "/logos/easy.png",
        "/logos/efg.png",
        "/logos/fidelis.png",
        "/logos/jj.png",
        "/logos/leon.png",
        "/logos/lfa.png",
        "/logos/marex.png",
        "/logos/ob.png",
        "/logos/pure.png",
        "/logos/lgt.png",
        "/logos/afrasia.png",
        "/logos/plotpoint.png",
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
        <div id='about-section2'>
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
            <p>At WealthFusion, we are a true Family Office, where
                time-honoured traditions meet bold, innovative thinking. Rooted
                in the legacy of traditional Private Banking, we bring a fresh
                perspective to the management of your wealth, combining
                creative strategies with a commitment to personalised service.</p>
        </div>
    )
}

export default Section2