import clsx from "clsx";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import H1 from "./H1";

export default function UnderlineButton({ title = "", className = "", icon }) {
  return (
    <button
      className={`${className} w-auto group overflow-hidden flex justify-between py-2 max-lg:mt-5 max-lg:mb-5 gap-10 items-center relative`}
    >
      <H1 className="text-xl text-white" title={title} />
      <div className="flex items-start">
        <MdArrowOutward
          size={20}
          className={clsx(
            ViewIcon(icon),
            `group-hover:rotate-45 transition-transform duration-500`
          )}
        />
      </div>
      <div
        className={`border-t absolute w-full top-[90%] border-white border-[1.5px]`}
      ></div>
      <div
        className={`border-t translate-x-[-100%] w-full group-hover:translate-x-0 transition-transform duration-1000 absolute top-[90%] border-[#4E4FEB] border-[1.5px]`}
      ></div>
    </button>
  );
}

const ViewIcon = (icon) => {
  const IconView = {
    true: "block",
    false: "hidden",
  };
  return IconView[icon] || IconView.true;
};
