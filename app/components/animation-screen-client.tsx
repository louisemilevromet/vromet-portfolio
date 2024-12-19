"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimationScreenClient = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".wrapper");
    document.body.classList.add("scroll-freeze");

    const scrollTimer = setTimeout(() => {
      document.body.classList.remove("scroll-freeze");
      document.body.classList.add("hide-back");
      wrappers.forEach((wrapper) => {
        (wrapper as HTMLElement).style.display = "none";
      });
    }, 1500);

    wrappers.forEach((wrapper) => {
      const cover = wrapper.querySelector(".cover");
      const text = wrapper.querySelector(".text");

      if (cover && text) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          cover,
          {
            scaleX: 1,
            transformOrigin: "left",
          },
          {
            scaleX: 0,
            duration: 1.75,
            transformOrigin: "right",
            ease: "power2.inOut",
          }
        )
          .fromTo(
            text,
            {
              x: "0%",
              opacity: 1,
            },
            {
              x: "100%",
              opacity: 0,
              duration: 1.75,
              ease: "power2.inOut",
            },
            "<"
          )
          .set([text, wrapper], {
            x: "0%",
            opacity: 0,
            zIndex: -1,
            duration: 0,
          });
      }
    });

    return () => {
      clearTimeout(scrollTimer);
      document.body.classList.remove("scroll-freeze");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper w-full h-full min-h-[100vh] bg-transparent rounded-lg absolute top-0 left-0 z-[1000] overflow-hidden">
      <div className="cover inset-0 bg-white z-10 absolute top-0 left-0"></div>
      <p className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 uppercase p-4 text-5xl sm:text-6xl font-bold text-black text-center w-full">
        Louis-Émile Vromet
      </p>
    </div>
  );
};

export default AnimationScreenClient;
