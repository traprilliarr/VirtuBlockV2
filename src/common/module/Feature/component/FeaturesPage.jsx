import H1 from "@/common/component/element/H1";
import React from "react";
import CardFeature from "./CardFeature";
import { FeatureItem } from "@/common/constant/FeatureItem";
import CardOffer from "@/common/component/element/CardOffer";

export default function FeaturesPage() {
  return (
    <div className="h-auto max-w-[1500px] bg-black flex flex-col justify-center px-5 lg:px-10  w-full mt-28 md:mt-32 overflow-hidden">
      <div className="flex lg:flex-row flex-col w-full items-center mb-5">
        <H1
          title="Features"
          className="md:!text-8xl text-5xl !w-full text-[#EEEEEE] font-bold !tracking-[-0.07em]"
        />
        <H1
          title="We are default a team of dedicated professionals committed to helping your business succeed."
          className="text-2xl text-[#EEEEEE]  !tracking-[-0.04em]"
        />
      </div>
      <div className="w-full lg:mt-10">
        <CardFeature Feature={FeatureItem} />
      </div>
      <div className="w-full  mt-20 relative overflow-hidden">
        <CardOffer title="Have you interested." />
      </div>
    </div>
  );
}
