import { SocialItem } from "@/common/constant/Social";
import Link from "next/link";
import React from "react";

export default function Social() {
  return (
    <div className="flex flex-row flex-wrap gap-3 mt-2">
      {SocialItem.map((item, index) => (
        <Link className="group" href={item.href} key={index} target="__blank">
          <div className=" outline outline-[1px] relative  overflow-hidden outline-white px-5 py-1 gap-2 justify-center items-center rounded-full flex">
            <div className="relative group-hover:z-[9] transition-all duration-500 group-hover:text-black flex gap-3 justify-center items-center">
              {item.logo}
              <h1 className=" ">{item.title}</h1>
            </div>
            <div className="bg-white group-hover:translate-y-[0%] transition-all duration-500 absolute inset-0 translate-y-[150%]"></div>
            <div className="bg-white group-hover:translate-y-[-50%] transition-all duration-500 absolute w-[30px] left-0 rounded-full h-[30px] translate-y-[110%]"></div>
            <div className="bg-white group-hover:translate-y-[-50%] transition-all duration-500 absolute w-[30px] left-[24%] rounded-full h-[30px] translate-y-[110%]"></div>
            <div className="bg-white group-hover:translate-y-[-50%] transition-all duration-500 absolute w-[30px] left-[48%] rounded-full h-[30px] translate-y-[110%]"></div>
            <div className="bg-white group-hover:translate-y-[-50%] transition-all duration-500 absolute w-[30px] left-[72%] rounded-full h-[30px] translate-y-[110%]"></div>
            <div className="bg-white group-hover:translate-y-[-50%] transition-all duration-500 absolute w-[30px] left-[92%] rounded-full h-[30px] translate-y-[110%]"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
