import gsap from "gsap";
import React, { useEffect } from "react";

const HowWeIn = () => {
  useEffect(() => {
    gsap.to("#impact-section2 h2", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: {
        amount: 0.5,
      },
      ease: "power2.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: "#impact-section2 h2",
        scroller: "body",
        start: "top 85%",
        end: "top 60%",
        // markers:true,
      },
    });
  }, []);

  return (
    <div id="impact-section2">
      <div className="left2">
        <h2>How We Invest</h2>
      </div>
      <div className="right2">
        <p>
          We don’t just manage money — we understand people. Every investment
          strategy begins with deep listening, builds on intelligent design, and
          adapts with market insight.
        </p>
        <p>
          Our approach integrates traditional portfolio construction with
          alternative solutions, always structured to protect, grow, and reflect
          your unique priorities.
        </p>
      </div>
    </div>
  );
};

export default HowWeIn;
