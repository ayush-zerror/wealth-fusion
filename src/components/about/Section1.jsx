import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";

const Section1 = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl
    .set("#about-section1", {
      y: -50,
    })
      .to("#about-section1", {
        opacity: 1,
        y: 0,
        duration: 1.6,
      })

      .to("#about-section1 h2", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        stagger: {
          amount: 0.5,
        },
        ease: "power2.out",
        duration: 1.2,
        // delay: 0.1,
      });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div id="about-section1">
      <div className="about-overlay1">
        <div className="about-title-wrap">
          <h2>Your Vision,</h2>
          <h2>Our Expertise.</h2>
        </div>
      </div>
      <div className="about-banner">
        <Image
          priority
          width={1000}
          height={1000}
          src="/images/ig15.webp"
          alt="about-banner"
        />
      </div>
    </div>
  );
};

export default Section1;
