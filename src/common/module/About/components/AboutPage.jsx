import React from "react";
import MainTitleAbout from "./MainTitleAbout";
import StoryAbout from "./StoryAbout";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";
import CardOffer from "@/common/component/element/CardOffer";
import Why_choose_Me from "./Why_choose_Me";

export default function AboutPage() {
  return (
    <div className="h-auto max-w-[1500px] lg:py-10 py-5  overflow-hidden flex-col flex justify-center w-full bg-black">
      <MainTitleAbout />
      <StoryAbout />
      <OurTeam />
      <OurValues />
      <Why_choose_Me />
      <div className="w-full lg:px-10 px-0 mt-20 relative overflow-hidden">
        <CardOffer title="Have you interested." />
      </div>
    </div>
  );
}
