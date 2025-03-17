import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
    useEffect(()=>{
        if(window.innerWidth < 575) return;
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#about-section2",
                scroller:"body",
                // markers:true,
                start:"top 60%",
                end:"top 50%",
                scrub:1
            }
        })
        tl
        .fromTo("#about-section2 p",{
            y:80,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:.6
        })

        return ()=>{
            tl.kill()
        }
    },[])
    return (
        <div id='about-section2'>
            <div className="marque">
                <div className="marque-about">
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/allure_60789c9820.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/ars_technica_vector2_KO_8e147e1d49.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/BA_final_KO_2945d1c813.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/CN_Johansens_white_ff27a4fadf.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/traveler_3108951d4a.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/epicurious_1_517b4cf2c8.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/Glamour_NEW_2023_KO_19471a87a0.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/gq_1_2cb44c4a3c.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/House_And_Garden_MAIN_white_ad0b0117d7.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/Cucina_new_77d11e3997.png" alt="Marque" width={1000} height={1000} />
                </div>
                <div className="marque-about">
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/allure_60789c9820.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/ars_technica_vector2_KO_8e147e1d49.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/BA_final_KO_2945d1c813.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/CN_Johansens_white_ff27a4fadf.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/traveler_3108951d4a.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/epicurious_1_517b4cf2c8.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/Glamour_NEW_2023_KO_19471a87a0.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/gq_1_2cb44c4a3c.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com/House_And_Garden_MAIN_white_ad0b0117d7.png" alt="Marque" width={1000} height={1000} />
                    <Image src="https://strapi-bus-eng-prod.s3.amazonaws.com/Cucina_new_77d11e3997.png" alt="Marque" width={1000} height={1000} />
                </div>
            </div>
            <p>At WealthFusion, we are a true Family Oce, where
                time-honoured traditions meet bold, innovative thinking. Rooted
                in the legacy of traditional Private Banking, we bring a fresh
                perspective to the management of your wealth, combining
                creative strategies with a commitment to personalised service.</p>
        </div>
    )
}

export default Section2