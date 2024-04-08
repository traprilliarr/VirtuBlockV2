import H1 from "@/common/component/element/H1";
import React from "react";
import MainTitle from "./component/MainTitle";
import ButtonViewAll from "@/common/component/element/ButtonViewAll";
import ImageGlow from "@/common/component/element/ImageGlow";
import SliderTechLeader from "./component/SliderTechLeader";
import ReactPlayer from "react-player";
import VideosHero from "./component/VideosHero";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mb-20 w-full overflow-hidden">
      <div className="w-full mt-[180px] relative z-[9] flex-col items-center flex justify-center ">
        <MainTitle />
        <H1
          className="mt-5 w-full lg:!w-[80%] !justify-center !text-xs sm:!text-sm lg:!text-base text-center "
          title="VirtuBlock is an innovative crypto wallet platform designed to securely manage various crypto assets, including major blockchain networks like Ethereum and Bitcoin. It prioritizes security, offering features such as two-factor authentication and end-to-end encryption. VirtuBlock aims to provide a seamless user experience, believing that an intuitive and secure NFC-integrated wallet can promote broader blockchain adoption globally."
        />
      <div className="w-full py-5 flex justify-center items-center flex-row flex-wrap gap-5">
        <a href="https://app.uniswap.org/swap?outputCurrency=0x68D1c2A170BaC7F73D7680970345fcf8ddEc79bb&inputCurrency=ETH" className="rounded-full bg-[#EEEEEE] text-black transition-colors duration-200 overflow-hidden outline outline-1 outline-[#EEEEEE] w-auto py-2 px-4">
          <ButtonViewAll title="Buy VirtuBlock" />
        </a>
        <a href="https://t.me/vb_portal" className="rounded-full bg-transparent text-black hover:bg-[#EEEEEE] hover:text-black transition-colors duration-200 overflow-hidden outline outline-1 outline-[#EEEEEE] w-auto py-2 px-4">
          <ButtonViewAll title="Join Community" />
        </a>
      </div>




        <div className="w-full">
          <VideosHero/>
        </div>
        <div className="w-full gap-5 flex justify-center items-center flex-col py-10">
          <h1 className="text-sm text-[#64686a]"></h1>
          <SliderTechLeader />
        </div>
      </div>
    </div>
  );
}
