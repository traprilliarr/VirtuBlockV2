import H1 from "@/common/component/element/H1";
import React from "react";
import ProjectSlideCard from "./components/ProjectSlideCard";
import { FeatureItem } from "@/common/constant/FeatureItem";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import CustomerServicevideos from "./components/CustomerServiceVideos";

export default function Project() {
  return (
    <div className="h-auto max-w-[1500px] py-10 px-5 lg:px-10  overflow-hidden flex-col flex justify-center  w-full ">
      <div className="w-full flex gap-5 flex-col py-5 justify-center items-center">
        <H1
          title="Roadmaps"
          className="md:!text-5xl !text-xl lg:w-[50%] w-full font-medium !justify-center text-center"
        />
        <h1 className="text-sm text-center lg:w-[60%] text-[#64686a]">
        You can see the VirtuBlock roadmap here or join our community.
        </h1>
      </div>
      <div className="w-full py-5">
        <ProjectSlideCard Content={FeatureItem} />
      </div>
      <div className="w-full ">
        <div className="w-full grid lg:grid-cols-2 justify-start items-center">
          <div className="w-full flex flex-col gap-5">
            <H1
              title="VirtuWallet is the Solution!"
              className="md:!text-5xl !text-xl  w-full font-medium !justify-start text-start"
            />
            <h1 className="text-sm text-start  text-[#64686a]">
            With VirtuWallet, users can benefit from a secure, efficient, 
            and user-friendly cryptocurrency wallet experience. 
            VirtuWallet is built on a robust technological foundation, 
            incorporating key components such as multi-network support 
            for managing various types of crypto assets, NFC integration for 
            easy transactions from mobile devices, and advanced security features 
            like biometric authentication, multi-signature wallets, and encryption 
            protocols to safeguard users' assets and data.
            </h1>
            <div>
                <ButtonArrow href='/' title="Watch tutorial videos" />
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden">
            <CustomerServicevideos />
          </div>
        </div>
      </div>
    </div>
  );
}
