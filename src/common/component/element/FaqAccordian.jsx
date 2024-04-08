"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function FaqAccordian({  className }) {
  const [openStates, setOpenStates] = useState(
    Array(Faq.length).fill(false)
  );

  const handleClick = (index) => {
    setOpenStates((prevOpenStates) => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;
    });
  };

  return (
    <ComponentTransition className="grid  gap-5">
      {Faq.map((item, index) => (
        <div
          key={index}
          className={clsx(className,`flex overflow-hidden flex-col mt-5 relative `)}
        >
         
          <button onClick={() => handleClick(index)} className="w-full relative">
            <div
              className={clsx("flex group h-auto items-center gap-5", {
                "cursor-pointer": !openStates[index],
              })}
            >
              <h1 className="md:text-base text-start text-base font-semibold">{item.title}</h1>
              <div className="relative right-0">
                <GoPlus
                  size={30}
                  className={`${
                    openStates[index] ? "rotate-45" : "rotate-0"
                  } transition-all duration-300`}
                />
              </div>
            </div>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openStates[index] ? "auto" : "0px" }}
            >
              <h1 className="text-start mt-5 text-base">{item.desc}</h1>
            </motion.div>
          </button>
        </div>
      ))}
    </ComponentTransition>
  );
}
