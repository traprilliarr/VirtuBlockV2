"use client";
import Image from "@/common/component/element/Image";
import React, { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { ValuesItem } from "@/common/constant/ValuesItem";

export default function ValuesCard() {
  const [titleIndex, setTitleIndex] = useState(0);

  const handleChange = (index) => {
    setTitleIndex(index);
  };

  return (
    <div className="w-full py-10">
      <div className="w-full grid lg:grid-cols-2 max-lg:gap-10 justify-center items-center">
        <div className="w-full flex  justify-center items-start">
          <div className="flex flex-wrap flex-row lg:grid lg:grid-cols-2 gap-3">
            {ValuesItem.map((item, index) => (
              <ComponentTransition
                delay={index * 0.1}
                key={index}
                className="w-auto "
              >
                <motion.button
                  whileTap={{
                    scale: 0.90
                  }}
                  className={clsx(
                    index === titleIndex ? " text-white " : "text-black",
                    "w-auto border-2 rounded-full lg:px-5 lg:py-4 p-2 relative overflow-hidden flex items-center justify-center "
                  )}
                  onClick={() => handleChange(index)}
                >
                    {item.icon}
                  <h1 className="relative line-clamp-1 max-lg:hidden">{item.title}</h1>{" "}
                  <div
                    className={clsx(
                      index === titleIndex
                        ? "translate-y-[0%]"
                        : "translate-y-[100%]",
                      "absolute bg-black transition-all duration-300 inset-0 z-[-9]"
                    )}
                  ></div>
                </motion.button>
              </ComponentTransition>
            ))}
          </div>
        </div>

        <ComponentTransition delay={0.2} className="w-full flex justify-center items-center flex-col h-auto lg:h-[250px] pb-10 overflow-hidden rounded-3xl">
          <AnimatePresence>
            {ValuesItem[titleIndex].title && (
              <motion.div
                className="w-full relative h-auto flex justify-center items-center"
                key={titleIndex}
                initial={{
                    x: 50,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: 50,
                    opacity: 0,
                  }}
              >

                <div className="w-full px-5  ">
                  <h1 className="text-xl py-2 font-semibold text-[#3D3B40]">
                    {ValuesItem[titleIndex].title}
                  </h1>
                  <h1 className="text-[#3D3B40]">{ValuesItem[titleIndex].desc}</h1>{" "}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ComponentTransition>
      </div>
    </div>
  );
}
