"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { motion } from "framer-motion";
import React from "react";

export default function StoryAbout() {
  return (
    <motion.section
      className="w-full flex relative flex-col items-center justify-center mt-10 bg-black py-20"
    >
      <ComponentTransition delay={0.7} className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">

            <H1
            title=" A Journey of Success"
            className="!text-3xl text-[#EEEEEE] font-bold tracking-tighter sm:!text-5xl !justify-center"
          />
            <H1
            title="From a humble beginning to a leading player, our journey has been
            a story of relentless pursuit of our goals."
            className="max-w-[900px] text-[#eeeeeee0] md:!text-xl/relaxed lg:!text-base/relaxed xl:!text-xl/relaxed  !justify-center"
          />
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <Image
            alt="Image"
            className="mx-auto lg:invisible aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height={310}
            src="https://images.unsplash.com/photo-1625014053925-88bef4805a76?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={550}
            priority
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">2000</h3>
                  <p className="text-white">
                    Founded with a vision to revolutionize the industry.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">2005</h3>
                  <p className="text-white">
                    Achieved our first major milestone.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">2010</h3>
                  <p className="text-white">Expanded our services globally.</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </ComponentTransition>
    </motion.section>
  );
}
