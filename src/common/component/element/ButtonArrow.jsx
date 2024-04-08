import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ButtonArrow({ title = "", href }) {
  return (
    <Link className="" href={href}>
    <button className="text-[#7D7F78] hover:text-black dark:hover:text-[#FFFFF7] hover:gap-3 transition-all duration-500 flex items-center gap-1">
      <h1>{title}</h1>
      <IoIosArrowRoundForward size={20} />
    </button>
    </Link>
  );
}
