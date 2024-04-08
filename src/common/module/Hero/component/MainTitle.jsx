"use client";
import TextParallax from "@/common/component/element/TextParallax";
import React from "react";

export default function MainTitle() {
  return (
    <div className="max-[547px]:mt-0 max-sm:mt-5  ">
      <TextParallax
        className=" !leading-[0.85em] items-center justify-center flex overflow-hidden  text-center !text-4xl sm:!text-5xl md:!text-7xl w-full  font-bold "
        texts="Intuitive Crypto Asset Management"
      />
    </div>
  );
}
