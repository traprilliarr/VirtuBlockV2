"use client";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import React from "react";
import { HeroImage } from "../../constant/HeroImage";
import { motion, useScroll } from "framer-motion";
import ComponentTransition from "./ComponentTransition";
import { useMobile } from "@/common/hooks/useMobile";
import { useParallax } from "@/common/hooks/useParallax";

export default function ImageGlow({ className = "", background, glow }) {
  const { scrollY } = useScroll();
  const isMobile = useMobile();
  const { y, yDown } = useParallax(scrollY);

  return (
    <ComponentTransition
      className={clsx(className, `px-2 absolute z-[-9] w-auto h-auto inset-0`)}
    >
      <div
        className={clsx(
          ViewBackground(background),
          `w-[800px] lg:w-full xl:h-[400px] 2xl:h-[500px]  relative overflow-hidden flex-col rounded-3xl flex justify-center items-center `
        )}
      >
        <motion.div
          initial={{ gap: "0rem" }}
          whileInView={{ gap: !isMobile ? "0.5rem" : "0.1rem" }}
          transition={{ type: "spring", duration: 3 }}
          viewport={{ once: true }}
          className="w-[100%] h-auto relative z-[-9] flex overflow-hidden "
        >
          {HeroImage.map((item, index) => (
            <motion.div
              key={index}
              className=" overflow-hidden h-auto  rounded-xl w-full"
              style={{
                y: index === 0 ? y : index === 2 || index === 4 ? y : yDown,
              }}
            >
              <Image
                alt="Hero"
                className="overflow-hidden rounded-xl w-[100vw] h-auto  object-cover"
                height={722}
                src={item.img}
                width={550}
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div
        className={clsx(
          ViewGlow(glow),
          `absolute  z-[-9] glowbg w-[200px] md:w-[500px] md:h-[300px] h-[200px] top-[50px]`
        )}
      ></div>
    </ComponentTransition>
  );
}

const ViewBackground = (background) => {
  const backgroundView = {
    true: "bg-[#bfcfe759]",
    false: "bg-transparent",
  };
  return backgroundView[background] || backgroundView.true;
};
const ViewGlow = (glow) => {
  const glowView = {
    true: "block",
    false: "hidden",
  };
  return glowView[glow] || glowView.true;
};
