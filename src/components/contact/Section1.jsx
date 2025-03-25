import gsap from 'gsap'
import React, { useEffect } from 'react'

const Section1 = () => {

    useEffect(() => {
        document.querySelectorAll("#right form .input").forEach(function (i) {
            i.querySelector("input").addEventListener("focus", function () {
                i.classList.add("active")
            })
            i.querySelector("input").addEventListener("blur", function () {
                if (this.value == "") {
                    i.classList.remove("active")
                }
            })
        })

        document.querySelectorAll("#right form .textarea").forEach(function (i) {
            i.querySelector("textarea").addEventListener("focus", function () {
                i.classList.add("active")
            })
            i.querySelector("textarea").addEventListener("blur", function () {
                if (this.value == "") {
                    i.classList.remove("active")
                }
            })

        })
        document.querySelectorAll(".lineanime").forEach(function (i) {
            i.addEventListener("mouseenter", function () {
                gsap.to(i.querySelector(".linei"), {
                    scaleX: 1, // Use scaleX directly
                    duration: 0.3, // Add duration for smooth animation
                    ease: "power1.out", // Optional easing
                });
            });

            i.addEventListener("mouseleave", function () {
                gsap.set(i.querySelector(".linei"), {
                    transformOrigin: "right", // Retract towards left
                })
                gsap.to(i.querySelector(".linei"), {
                    scaleX: 0, // Revert to scaleX(0) on mouse leave
                    duration: 0.3,
                    ease: "power1.in", // Optional easing,
                    onComplete: () => {
                        gsap.set(i.querySelector(".linei"), {
                            transformOrigin: "left", // Retract towards left
                        })

                    }
                });
            });
        });

    }, [])

    return (
        <section id="page1">
            <div id="form">
                <div id="left">
                    <div className='contact-title'>
                        <h2>Contact</h2>
                        <h5 className='contact-p'>We value smart finance and partnerships that drive wealth. Let’s connect.</h5>
                    </div>
                    <div className="elem">
                        <div className="add">
                            <h6>Business enquiries</h6>
                            <a target="_blank" href="mailto:info@wealthfusion.co.uk">Email: info@wealthfusion.co.uk</a>
                            <a target="_blank" href="tel:+442081547030">Phone: +44 (0) 208 154 7030</a>
                        </div>
                        <div className="add">
                            <h6>Address</h6>
                            <a href='https://maps.app.goo.gl/xkC2zERs2ztvfT7GA' target='_blank'>70 Baker Street, Marylebone, <br /> London W1U 7DL</a>
                        </div>
                        <div className="add">
                            <h6>Working Hours</h6>
                            <h5>Monday to Saturday 10:00 am to 6:00 pm , Sunday Closed</h5>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <form action="">
                        <div className="input lineanime">
                            <input type="text" />
                            <h6>NAME*</h6>
                            <div className="linei"></div>
                        </div>
                        <div className="input lineanime">
                            <input type="text" />
                            <h6>EMAIL*</h6>
                            <div className="linei"></div>
                        </div>
                        <div className="input lineanime">
                            <input type="text" />
                            <h6>PHONE NUMBER*</h6>
                            <div className="linei"></div>
                        </div>
                        <div className="input lineanime">
                            <input type="text" />
                            <h6>COMPANY NAME*</h6>
                            <div className="linei"></div>
                        </div>
                        <div className="input lineanime input-full">
                            <input type="text" />
                            <h6>SUBJECT*</h6>
                            <div className="linei"></div>
                        </div>
                        <div className="textarea lineanime">
                            <h6>MESSAGE*</h6>
                            <div className="linei"></div>
                            <textarea name="" id=""></textarea>
                        </div>
                    </form>
                    <button id='submit-btn'>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Section1