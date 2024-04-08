"use client";
import React from "react";

export default function VideosHero() {
  const videoSrc =
    "/Aset/ppq.mp4";

  return (
    <div className="w-full rounded-2xl">
      <video
        width="100%"
        height="100%"
        controls
        preload="auto"
        autoPlay
      >
        <source
          src="/Aset/ppq.mp4"
          type="video/mp4"
        />
        <track
          src="/Aset/VidexAI – Transform Your Words Into Captivating Videos.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </div>
  );
}
