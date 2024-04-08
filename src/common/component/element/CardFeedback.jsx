"use client";
import React from "react";
import Image from "./Image";
import ComponentTransition from "./ComponentTransition";
import { motion, useScroll } from "framer-motion";
import clsx from "clsx";
import { useTestiParallax } from "@/common/hooks/useParallax";

export default function CardFeedback({ testimonial, className }) {
  const {scrollY} = useScroll();
  const {x} = useTestiParallax(scrollY)
  return (
    <div className="flex relative gap-5 w-[1400px] md:w-[1500px] overflow-hidden">
      {testimonial.map((item, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          style={{
            x
          }}
          className={clsx(
            className,
            `w-[600px]  bg-neutral-950 flex flex-col border-[1px] border-neutral-700 items-center overflow-hidden px-10 py-10 rounded-2xl relative`)}
        >

          <div className="w-full flex relative ">
            <h1 className="text-white md:text-base text-start ">
              {item.testi}
            </h1>
          </div>

          <div className="w-full overflow-hidden gap-5 items-center flex py-5">
            {item.img && (
              <div className="lg:w-[70px] w-[40px] lg:h-[70px] h-[40px] rounded-full overflow-hidden">
                <Image
                  className="w-full h-auto "
                  src={item?.img}
                  alt="Image"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            )}
            <div className="relative">
              <h1 className="text-white">{item.name}</h1>
              <h1 className="text-white/70">{item.jobTitle}</h1>
            </div>
          </div>
        </ComponentTransition>
      ))}

    </div>
  );
}
