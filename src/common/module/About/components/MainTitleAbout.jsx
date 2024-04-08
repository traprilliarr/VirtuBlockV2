"use client";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import ImageGlow from "@/common/component/element/ImageGlow";
import { useMobile } from "@/common/hooks/useMobile";
import { useImageParallax } from "@/common/hooks/useParallax";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function MainTitleAbout() {
  const isMobile = useMobile();
  const { scrollY } = useScroll();
  const { y, x, w, round } = useImageParallax(scrollY);
  return (
    <>
      <div className="w-full flex relative flex-col items-center px-5 lg:px-10 justify-center mt-28  ">
        <div className="flex lg:flex-row flex-col w-full items-center mb-5">
          <H1
            title="About Us"
            className="md:!text-8xl text-5xl !w-full text-[#EEEEEE] font-bold !tracking-[-0.07em]"
          />
          <H1
            title="We are default a team of dedicated professionals committed to helping your business succeed."
            className="text-2xl text-[#EEEEEE]  !tracking-[-0.04em]"
          />
        </div>
        <motion.div
          style={
            !isMobile
              ? {
                  y,
                  x,
                  width: w,
                  borderRadius: round,
                }
              : {}
          }
          className=" overflow-hidden max-lg:hidden block lg:absolute z-[9] lg:left-[40.5%] lg:top-[14%]"
        >
          <Image
            className="w-full h-auto object-cover "
            src="https://images.unsplash.com/photo-1625014053925-88bef4805a76?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Img"
            width={800}
            height={800}
            priority
          />
        </motion.div>
      </div>
      <div className="px-5 lg:px-10 flex justify-center items-center overflow-hidden">
        <ImageGlow className="!relative !z-0 " background={true} glow={false} />
      </div>
    </>
  );
}
