import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function CardOffer({title, className = ''}) {
  return (
    <div className={clsx(className,`px-2  relative`)}>
      <div className="w-full px-5 relative z-[9] overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 py-40">
        <Image
          src="/bg.jpg"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover opacity-70 z-[-9] absolute inset-0"
        />
        <h1 className="text-3xl md:text-7xl py-5 text-center bg-clip-text bg-gradient-to-r from-[#EEEEEE]  from-50% to-[#b1b1b1]  md:w-[80%] text-transparent font-bold">
          {title}
        </h1>
        <div className="w-full flex flex-col items-center md:flex-row justify-center gap-3">
          <Link href="/contact">
            <ButtonSpot title="Get In Touch" className='!px-10 bg-[#EEEEEE]' />
          </Link>
        </div>
      </div>
    </div>
  );
}
