"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import ButtonViewAll from "../element/ButtonViewAll";
import Logo from "./Logo";


const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-md bg-[#000000e8]  border-b-[1px] border-[#171718a9]" : "border-transparent",
        `w-full transition-all duration-300 mx-auto  max-w-[1500px]   py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex w-full z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start  items-center gap-1"
          >
            <Logo />

          </Link>
        </div>
        <div className="lg:flex hidden  justify-center gap-5 items-center w-full">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className="group  flex flex-nowrap justify-center gap-5 items-center w-auto relative"
              key={index}
            >
              <h1 className={`text-[#F8EDFF] text-base font-medium flex flex-nowrap line-clamp-1`}>
                {item.title}
              </h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? `absolute top-[23px] h-[2px] flex items-center w-[50%]    transition-transform duration-300 bg-[#F8EDFF]`
                    : `absolute top-[23px] h-[2px] w-[0%]  transition-all duration-300 group-hover:w-[50%] bg-[#F8EDFF]`
                )}
              ></div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          <NavMobile scroll={scroll} open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden  w-full items-end justify-end">
        <Link href="#" className=" flex justify-end">
          <ButtonViewAll
            title="Explore VirtuBlock"
            className={`
             transition-colors duration-300 overflow-hidden !bg-transparent outline outline-1  w-auto !py-2 outline-[#F8EDFF] !text-[#F8EDFF] hover:!bg-[#F8EDFF] hover:!text-[#3D3B40]`}
          />
        </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
