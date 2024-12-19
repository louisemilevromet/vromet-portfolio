"use client";

import dynamic from "next/dynamic";

const AnimationScreenClient = dynamic(
  () => import("./animation-screen-client"),
  {
    ssr: false,
  }
);

export const AnimationScreen = () => {
  return <AnimationScreenClient />;
};

export default AnimationScreen;
