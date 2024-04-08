import Image from "@/common/component/element/Image";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { SocialItem } from "@/common/constant/Social";
import Link from "next/link";
import React from "react";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <div className="h-auto max-w-[1500px]   px-5 lg:px-10 overflow-hidden flex-col flex justify-center  w-full bg-black">
      <div className="w-full flex flex-col justify-center ">
        <div className="mt-14 grid gap-10 lg:grid-cols-3 w-full">
          <div className="w-full  items-center flex flex-col gap-5">
            <div className="w-[100px] overflow-hidden">
              <Image
                alt="Hero"
                className="overflow-hidden rounded-xl w-[100vw] h-auto  object-cover"
                height={722}
                src='/Aset/logonav.png'
                width={550}
                priority
              />
            </div>
            <div>
              <h1 className="text-center">
              Intuitive Crypto Asset Management
              </h1>
            </div>
            <div className="gap-5 flex py-5 justify-center items-center w-full">
            <Link href='https://t.me/vb_portal' target="__blank">
            <FaTelegram  size={30} />
            </Link>
            <Link href='https://twitter.com/virtu_block' target="__blank">
            <FaTwitter size={30} />
            </Link>
            <Link href='https://medium.com/@virtu_block' target="__blank">
            <FaMedium size={30} />
            </Link>
            <Link href="https://github.com/virtu_block" target="__blank">
            <FaGithub  size={30} />
            </Link>
          </div>
          </div>
          <div className="flex w-auto justify-start flex-col ">
            <div className="w-full border-b-[1px] border-[#EEEEEE]">
              <h1 className="text-xl font-semibold py-1 text-[#EEEEEE]">
                NAVIGATION
              </h1>
            </div>
            <div className="flex w-auto py-5 flex-col">
              {NavigationItem.map((item, index) => (
                <Link
                  key={index}
                  href={item.src}
                  className="mb-3 w-auto group relative overflow-hidden"
                >
                  <h1 className="text-[#EEEEEE]  transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-100%]">
                    {item.title}
                  </h1>
                  <h1 className="text-[#EEEEEE] transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[100%] group-hover:translate-y-[0%] absolute">
                    {item.title}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full block">
            {SocialItem.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="border-b-[1px] group mb-5 border-[#EEEEEE] flex overflow-hidden items-center justify-between"
              >
                <div className="w-full overflow-hidden flex relative justify-between items-center  text-[#EEEEEE]">
                  <h1 className="text-[#EEEEEE] transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-100%]">
                    {item.title}
                  </h1>
                  <h1 className="text-[#EEEEEE] transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[150%] group-hover:translate-y-[0%] absolute">
                    {item.title}
                  </h1>

                  <MdArrowOutward
                    size={30}
                    className="group-hover:rotate-45 transition-transform duration-300 text-[#EEEEEE]"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
