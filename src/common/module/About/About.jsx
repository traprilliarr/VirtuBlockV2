"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="h-auto max-w-[1500px] py-10  px-5 lg:px-10  overflow-hidden flex-col flex justify-center  w-full ">
      <div className="w-full flex gap-5 flex-col py-5 justify-center items-center">
        <div className="w-auto px-8 py-1 rounded-full border-[1px] border-[#3D3B40]">
          <h1 className="text-[#3D3B40] text-lg font-medium">About Us</h1>
        </div>
        <H1
          title="The vision of Visionize AI"
          className="md:!text-5xl !text-xl !text-[#3D3B40] w-full font-medium !justify-center"
        />
        <motion.h1
          initial={{
            x: 250,
            y: 150,
          }}
          whileInView={{
            x: 0,
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="text-base lg:text-xl text-[#3D3B40] w-full text-center relative"
        >
          Visionize AI is to revolutionize the way we create and interact with
          digital content by bridging the gap between textual imagination and
          visual realization. At its core, Visionize AI aspires to democratize
          content creation, making it possible for anyone, regardless of their
          technical skill or artistic ability, to bring their ideas, stories,
          and concepts to life through video. This transformative approach is
          not only about enhancing the accessibility of video production but
          also about fostering a new era of creativity and storytelling.
        </motion.h1>
      </div>
    </div>
  );
}
