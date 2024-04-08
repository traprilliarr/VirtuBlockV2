"use client";
import React from "react";

export default function CustomerServicevideos() {
  const videoSrc =
    "/Aset/customer-support-feature.mp4";

  return (
    <div className="w-full rounded-2xl">
      <video
        width="100%"
        height="100%"
        preload="auto"
        autoPlay
      >
        <source
          src={videoSrc}
          type="video/mp4"
        />
        <track
          src={videoSrc}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </div>
  );
}
