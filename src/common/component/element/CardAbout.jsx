"use client";
import React from "react";
import ComponentTransition from "./ComponentTransition";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function CardAbout({ whyChooseme, className }) {
  return (
    <div className="grid lg:grid-cols-2 gap-5 w-full ">
      {whyChooseme.map((item, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            className,
            `w-full bg-neutral-950 flex flex-col justify-start items-center overflow-hidden border-[1px] border-neutral-800 px-10 py-16 rounded-2xl relative`
          )}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { type: "spring", duration: 2 },
            }}
            viewport={{ once: true }}
            className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full bg-[#464646] absolute top-[-10%] right-[-180px]"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { type: "spring", duration: 2 },
            }}
            viewport={{ once: true }}
            className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full bg-[#3a3a3a] absolute top-[10%] right-[-90px]"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: { type: "spring", duration: 2 },
            }}
            viewport={{ once: true }}
            className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full bg-[#1f1f1f] absolute top-[25%] right-[-50px]"
          ></motion.div>
          {item.icon && (
            <div className="w-full flex justify-start !text-white">{item.icon}</div>
            )}
          <div className="w-full flex relative ">
            <h1 className="text-[#EEEEEE] md:text-2xl py-5 text-start font-semibold">
              {item.title}
            </h1>
          </div>

          <div className="w-full overflow-hidden gap-5 items-center flex ">
            <div className="relative">
              <h1 className="text-[#EEEEEE]">{item.desc}</h1>
            </div>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
