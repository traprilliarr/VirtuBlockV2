import React from "react";
import Image from "../element/Image";

export default function Logo() {
  return (
    <div className="w-[120px] ">
    <Image
    className="w-full h-auto object-cover" 
    src="/Aset/logonav.png"
    alt="Visionize Logo"
    width={400}
    height={400}
    priority
    />
    </div>
  );
}
