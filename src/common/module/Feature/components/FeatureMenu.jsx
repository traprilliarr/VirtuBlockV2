import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { FeatureMenuItem } from "@/common/constant/FeatureItem";
import React from "react";
import { GrMultiple } from "react-icons/gr";

export default function FeatureMenu() {
  return (
    <div className="w-full grid lg:grid-cols-3 justify-center items-center gap-5">
      {FeatureMenuItem.map((item, index) => (
        <ComponentTransition
            delay={index * 0.1}
          key={index}
          className="w-full gap-5 h-auto lg:h-[480px]   flex  bg-gradient-to-b from-[#0e0e0e] from-50% to-transparent  relative group z-[9]  overflow-hidden rounded-3xl flex-col items-center justify-start text-center p-6"
        >
          <div className="p-3 w-[70px] h-[70px] bg-neutral-900 rounded-2xl border-[1px] border-neutral-500 flex justify-center items-center">
            {item.icon}
          </div>

          <h1
            className={`text-2xl dark:text-white text-black  transition-all duration-300 font-semibold `}
          >
            {item.title}
          </h1>
          <p className={`mt-2 text-[#64686a]   transition-all duration-300 `}>
            {item.desc}
          </p>
        </ComponentTransition>
      ))}
    </div>
  );
}
