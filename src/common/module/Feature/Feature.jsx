'use client'
import H1 from "@/common/component/element/H1";
import React from "react";
import SwiperCard from "./components/SwiperCard";
import { FeatureItem } from "@/common/constant/FeatureItem";
import FeatureMenu from "./components/FeatureMenu";

export default function About() {
  return (
    <div className="h-auto max-w-[1500px] py-10 px-5 lg:px-10  overflow-hidden flex-col flex justify-center  w-full ">
      <div className="w-full flex gap-5 flex-col py-5 justify-center items-center">
        {/* <div className="w-auto px-8 py-1 rounded-full border-[1px] border-[#3D3B40]">
          <h1 className="text-[#3D3B40] text-lg font-medium">Our Feature</h1>
        </div> */}
        <H1
        
          title="What features are available in VirtuBlock?"
          className="md:!text-5xl !text-xl lg:w-[50%] w-full font-medium !justify-center text-center"
        />
         <h1 className="text-sm text-center lg:w-[60%] text-[#64686a]">With VirtuBlock, you can securely manage various types of crypto assets with ease, thanks to our innovative platform equipped with high-security features like two-factor authentication and end-to-end encryption.</h1>
        
      </div>
      <div className="w-full py-5">
        <FeatureMenu />
      </div>

    </div>
  );
}
