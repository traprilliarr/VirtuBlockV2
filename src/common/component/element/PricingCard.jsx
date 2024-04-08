'use client'
import React, { useState } from "react";
import ComponentTransition from "./ComponentTransition";
import { FaCheck } from "react-icons/fa";
import { PricingItem } from "@/common/constant/PricingItem";
import clsx from "clsx";
import { ButtonSpot } from "./ButtonSpot";
import { motion } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";

export default function PricingCard() {
  const isMobile = useMobile();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 xl:grid-cols-3 gap-5 w-full place-content-center place-items-center">
      {PricingItem.map((item, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            item.className,
            ` w-full relative overflow-hidden p-10 grid gap-10 rounded-3xl border-[1px] border-neutral-800 bg-neutral-950`
          )}
          style={{
            scale: index === 1 ? !isMobile ? 1.04 : 1 : 1
          }}
        >
          {item.recommended && (
            <div className="w-auto  absolute right-0 px-5 py-2  z-[9] bg-black rounded-bl-xl">
            <h1 >
              {item.recommended}
            </h1>
          </div>
            )}
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
          <div className="items-center space-y-0 gap-4 p-0 relative">
            <div className="grid gap-1 text-center">
              <h1 className="text-lg lg:text-2xl text-white font-bold">{item.plan}</h1>
              <p className="text-xs text-white">{item.desc}</p>
            </div>
          </div>
          <div className="p-0 grid gap-4 relative">
            <div className="flex items-center justify-center ">
              <h1 className="text-4xl font-bold text-white ">
              {item.price} 
              <span className="text-neutral-300 ">
              {item.payTime}
              </span>
              </h1>
            </div>
            <ul className="grid text-white gap-2 py-4 relative">
              <li>
                <FaCheck className="mr-2 inline-block h-4 w-4" />
                {item.benefit[1]}
              </li>
              <li>
                <FaCheck className="mr-2 inline-block h-4 w-4" />
                {item.benefit[2]}
              </li>
              <li>
                <FaCheck className="mr-2 inline-block h-4 w-4" />
                {item.benefit[3]}
              </li>
            </ul>
          </div>
          <div className="w-full  flex justify-center items-center">
            <ButtonSpot className="w-full bg-white" title="Choose Plan" />
          </div>
          {index === 1 && (
            <div className="absolute  z-[-99] glow w-[200px] !rounded-full md:w-[200px] md:h-[200px] h-[200px] left-0 top-[0%]"></div>
          )}
        </ComponentTransition>
      ))}
    </div>
  );
}
