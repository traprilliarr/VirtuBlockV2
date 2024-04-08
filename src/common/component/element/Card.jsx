"use client";
import React from "react";
import Image from "./Image";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";
import Link from "next/link";

export default function Card({ Work }) {
  const isMobile = useMobile();
  return (
    <div className="w-full py-10 overflow-hidden">
      {Work.map((item, index) => (
        <motion.div
          initial={{
            height: "100px",
            y: "50%",
            marginBottom: "50px",
          }}
          whileInView={{
            height: "350px",
            y: "0%",
            marginBottom: "40px",
          }}
          transition={{
            type: "tween",
            delay: index * 0.1,
            ease: [0.5, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          key={index}
          className="w-full group  flex items-end  relative overflow-hidden object-cover rounded-[40px]"
        >
          <Link href={`/work/${item.slug}`} className="w-full">
          {/* <div className="absolute translate-y-[-100%] group-hover:translate-y-[0%] transition-transform duration-500 inset-0 bg-gradient-to-bl from-[#949494] to-transparent to-35%  w-full z-[9]"></div> */}
          <Image
            className="w-full h-[350px] group-hover:scale-110 overflow-hidden absolute inset-0 object-cover"
            src={item.img}
            alt={item.title}
            width={800}
            height={800}
            loading="lazy"
          />
          <div className="relative flex  justify-start items-end w-full top-[-20px] h-[20%]  px-5 ">
            <div className="py-10 md:px-10 px-5 bg-white flex  justify-between items-end w-full rounded-[35px]">
              <div className="w-full">
                <div className="w-full">
                  <h1 className="md:text-2xl text-xl text-start text-black font-semibold">
                    {item.title}
                  </h1>
                </div>
                <div className="mt-2 w-full flex flex-row flex-wrap gap-2">
                  <div className=" outline flex justify-center items-center rounded-full outline-black outline-[1px] w-auto">
                    <h1 className="text-sm text-black px-5 py-1">
                      {item.category[1]}
                    </h1>
                  </div>
                  <div className=" outline flex justify-center items-center rounded-full outline-black outline-[1px] w-auto">
                    <h1 className="text-sm text-black px-5 py-1">
                      {item.category[2]}
                    </h1>
                  </div>
                  <div className=" outline flex justify-center items-center rounded-full outline-black outline-[1px] w-auto">
                    <h1 className="text-sm text-black px-5 py-1">
                      {item.category[3]}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="border-2 border-black rounded-full py-2 px-2 ">
                <MdArrowOutward
                  size={!isMobile ? 50 : 20}
                  className="group-hover:rotate-45 transition-transform duration-300 text-black"
                />
              </div>
            </div>
          </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
