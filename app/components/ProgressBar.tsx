"use client";

import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;

      if (scrolled <= 1) {
        setProgress(1);
      } else if (scrolled >= 100) {
        setProgress(100);
      } else {
        setProgress(scrolled);
      }
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ne rien rendre jusqu'à ce que le composant soit monté côté client
  if (!isClient) return null;

  // Vérifier isMobile seulement après le montage côté client
  if (isMobile) return null;

  return (
    <div className="fixed lg:right-[10px] lg:w-[8px] w-[4px] right-[4px] h-[95%] bg-[#222] rounded-[0.5rem] top-[50%] transform -translate-y-[50%] m-auto">
      <div
        className="lg:w-[8px] w-[4px] bg-[#ffffff] rounded-[0.5rem]"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};
