"use client";
import React from "react";
import clsx from "clsx";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function CardFeature({ Feature }) {
  return (
    <div className="w-full flex lg:flex-row flex-col flex-wrap gap-5 py-10 overflow-hidden">
      {Feature.map((item, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            item.className,
            ` group  flex items-end  relative`)}
        >
          <div className="relative flex  justify-start  w-full ">
            <div className="py-10 md:px-10 overflow-hidden relative px-5 border-[1px] border-[#363636] bg-neutral-900/50 flex h-[280px] gap-5 flex-col w-full rounded-3xl">
             <div className="w-full flex-col">
              {item.icon}
             </div>
              <div className="w-full">
                <div className="w-full">
                  <h1 className="md:text-2xl text-xl text-start text-white font-semibold">
                    {item.title}
                  </h1>
                </div>
                <div className="mt-2 w-full flex flex-row flex-wrap gap-2">
                <p className=" text-start text-sm text-white line-clamp-4">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="absolute   glow  bottom-0 w-[0px] transition-all duration-500 group-hover:lg:w-[150px] h-[150px] "></div>
            </div>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
