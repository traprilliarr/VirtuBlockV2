"use client";
import React, { useState } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { motion } from "framer-motion";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperCard({ Content }) {


  return (
    <div className="w-full  flex justify-center  items-center px-5 py-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="z-[99] !px-5 lg:!px-20 relative w-full  flex gap-5 max-md:flex-col md:overflow-x-scroll md:overflow-y-hidden no-scrollbar py-10"
      >
        {Content.map((item, index) => (
          <SwiperSlide key={index} className="pb-10 lg:pb-20 overflow-hidden ">
            <ComponentTransition
              delay={index * 0.1}

              className="w-full h-auto lg:h-[480px]  group flex  bg-gradient-to-b from-[#0641AA] from-50% to-[#BBCDE9]  relative group z-[9]  overflow-hidden rounded-3xl flex-col items-start justify-start text-start p-6"
            >

              {item.icon}
              <h1
                className={`text-2xl dark:text-white text-black  transition-all duration-300 font-semibold group-hover:text-white`}
              >
                {item.title}
              </h1>
              <p
                className={`mt-2 dark:text-white text-black   transition-all duration-300 group-hover:text-white`}
              >
              </p>
                {item.desc}
              {item.link && (
                <div className="py-3">
                  <ButtonArrow title="Read More" href={item.link} />
                </div>
              )}
            </ComponentTransition>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
