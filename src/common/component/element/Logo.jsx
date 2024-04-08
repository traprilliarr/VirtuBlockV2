import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Logo({ open, scrolled }) {
  return (
    <motion.svg
      
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="30"
      viewBox="0 0 58 60"
      fill="none"
    >
      <rect
        y="8.30113"
        width="11.9499"
        height="71"
        transform="rotate(-44 0 8.30113)"
        className={
          open
            ? "fill-white"
            : `fill-white group-hover:-rotate-[40deg] transition-transform duration-300`
        }
      />
      <motion.rect
      // animate={{scale: open ? 0 : 1}}
      // transition={{
      //   type: "tween"
      // }}
        x="0.5"
        y="0.5"
        width="11"
        height="58"
        className={clsx(open ? "stroke-white " : "", `stroke-white `)}
      />
      <motion.rect
      // animate={{scale: open ? 0 : 1}}
      // transition={{
      //   type: "tween"
      // }}
        x="17.5"
        y="0.5"
        width="11"
        height="58"
        className={clsx(open ? "stroke-white " : "", `stroke-white`)}
      />
      <motion.rect
      // animate={{scale: open ? 0 : 1}}
      // transition={{
      //   type: "tween"
      // }}
        x="34.5"
        y="0.5"
        width="11"
        height="58"
        className={clsx(open ? "stroke-white" : "", `stroke-white`)}
      />
      {/* <motion.rect
        initial={{rotate: '0', y: 26, x: -11}}
        animate={{rotate: open ? 44 : 0, height: open ? 71 : 0}}
        x="30.5"
        y="-30.5"
        width="11.9499"
        height="71"
        className={
          open ? "fill-white" : `fill-black transition-transform duration-300`
        }
      /> */}
    </motion.svg>
  );
}
