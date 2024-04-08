"use client";
import CardAbout from "@/common/component/element/CardAbout";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import { ValuesItem } from "@/common/constant/Values";
import { motion } from "framer-motion";
import React from "react";

export default function OurValues() {
  return (
    <motion.section className="w-full flex justify-center items-center py-5 lg:py-10 bg-black lg:px-10 px-5">
      <ComponentTransition delay={0.7} className="container px-0 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <H1
              title="What We Stand For"
              className="!text-3xl font-bold tracking-tighter sm:!text-5xl text-[#EEEEEE]  !justify-center"
            />
            <H1
              title="Our values guide our decisions and actions. They are the
              foundation of our company culture."
              className="max-w-[900px] text-[#EEEEEE] md:!text-xl/relaxed lg:!text-base/relaxed xl:!text-xl/relaxed  !justify-center"
            />
          </div>
        </div>
        <div className=" mt-8">
          <CardAbout whyChooseme={ValuesItem} />
        </div>
      </ComponentTransition>
    </motion.section>
  );
}
