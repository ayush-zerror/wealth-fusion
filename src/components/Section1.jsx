import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Section1 = () => {
  const slideData = [
    {
      title: "DBIMA",
      description: "Don Bosco International Media Academy Établissement d'Enseignement Supérieur Privé",
      poster: "https://images.unsplash.com/photo-1670569374007-cb1e5f9a4541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Learn",
      description: "Develop your media skills to create projects that inspire creativity and foster human values.",
      poster: "https://images.unsplash.com/photo-1595196862630-d5825e9ee2da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Collab",
      description: "Cultivate enduring meaningful bonds with people from varied cultures while learning.",
      poster: "https://images.unsplash.com/photo-1619547582920-047897a27161?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Discover",
      description: "Explore the cultural richness of Paris and Europe through a 'Study Travel' to broaden perspectives.",
      poster: "https://images.unsplash.com/photo-1603924907937-60733d04b139?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const slideRef = useRef([]);
  const titleRef = useRef([]);
  const paraRef = useRef([]);
  const barRef = useRef([]);
  const intervalRef = useRef(null);
  const currIndexRef = useRef(0);
  const barTweenRef = useRef(null);

  const slideDuration = 5500;

  const animateBar = (index, direction = "next") => {
    if (barTweenRef.current) barTweenRef.current.kill();

    // Reset bars
    barRef.current.forEach((bar, i) => {
      if (i < index) gsap.set(bar, { width: "100%" });
      else gsap.set(bar, { width: "0%" });
    });

    // Animate current bar from 0%
    barTweenRef.current = gsap.to(barRef.current[index], {
      width: "100%",
      ease: "linear",
      duration: slideDuration / 1000,
    });
  };

  const goToSlide = (nextIndex, direction = "next") => {
    const curr = currIndexRef.current;
    const next = nextIndex;
  
    const currentSlide = slideRef.current[curr];
    const nextSlide = slideRef.current[next];
    const currentTitle = titleRef.current[curr];
    const nextTitle = titleRef.current[next];
    const currentPara = paraRef.current[curr];
    const nextPara = paraRef.current[next];
  
    // Set initial clipPath based on direction
    if (direction === "next") {
      gsap.set(nextSlide, {
        zIndex: 3,
        clipPath: "polygon(125% 0%, 100% 0%, 100% 100%, 100% 100%)",
        scale: 1.8,
      });
    } else {
      gsap.set(nextSlide, {
        zIndex: 3,
        clipPath: "polygon(0% 0%, -25% 0%, 0% 100%, 0% 100%)",
        scale: 1.8,
      });
    }
  
    gsap.set(currentSlide, { zIndex: 2 });
  
    // Animate
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(currentSlide, { zIndex: 1 });
        currIndexRef.current = next;
      },
    });
  
    tl.to(nextSlide, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      ease: "power2.inOut",
    }, "a")
      .to(currentTitle, {
        top: "-100%",
        duration: 0.8,
        onComplete: () => gsap.set(currentTitle, { top: "100%" }),
      }, "a")
      .to(nextTitle, { top: "0%", duration: 0.8 }, "a")
      .to(currentPara, {
        top: "-100%",
        opacity: 0,
        duration: 0.8,
        onComplete: () => gsap.set(currentPara, { top: "100%", opacity: 1 }),
      }, "a")
      .to(nextPara, { top: "0%", duration: 0.8 }, "a");
  
    animateBar(next, direction);
  };
  

  const nextSlide = () => {
    const next = (currIndexRef.current + 1) % slideData.length;
    goToSlide(next, "next");
    restartInterval();
  };

  const prevSlide = () => {
    const prev = (currIndexRef.current - 1 + slideData.length) % slideData.length;
    goToSlide(prev, "prev");
    restartInterval();
  };

  const restartInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, slideDuration);
  };

  useGSAP(() => {
    animateBar(currIndexRef.current);
    intervalRef.current = setInterval(nextSlide, slideDuration);

    return () => {
      clearInterval(intervalRef.current);
      if (barTweenRef.current) barTweenRef.current.kill();
    };
  }, []);

  return (
    <div className="home-section1" style={{ position: "relative" }}>
      <div className="home-slide-container">
        {slideData.map((s, i) => (
          <div
            key={i}
            className="hero-slide"
            ref={(el) => (slideRef.current[i] = el)}
          >
            <img src={s.poster} alt="" />
          </div>
        ))}
      </div>

      <div className="home-slide-text">
        <div className="hero-title">
          {slideData.map((s, i) => (
            <h1 key={i} ref={(el) => (titleRef.current[i] = el)}>
              {s.title}
            </h1>
          ))}
        </div>
        <div className="hero-para">
          {slideData.map((s, i) => (
            <p key={i} ref={(el) => (paraRef.current[i] = el)}>
              {s.description}
            </p>
          ))}
        </div>
      </div>

      <div className="home-slide-bar-wrap">
        {slideData.map((_, i) => (
          <div key={i} className="home-slide-bar">
            <div
              className="bar-loader"
              ref={(el) => (barRef.current[i] = el)}
            ></div>
          </div>
        ))}
      </div>

      <div className="slide-controls">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Section1;
