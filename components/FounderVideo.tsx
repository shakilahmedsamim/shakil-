"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";

/**
 * Placeholder video ID. Replace with the real YouTube video ID the client
 * supplies (a founder-led talking-to-camera video, not a stock graphic)
 * and this component switches to a real lazy-loaded embed automatically.
 */
const VIDEO_ID = "";

export default function FounderVideo() {
  const [playing, setPlaying] = useState(false);

  if (!VIDEO_ID) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-white flex flex-col items-center justify-center gap-3 text-center px-6">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white">
          <PlayIcon className="w-6 h-6 ml-0.5" />
        </span>
        <p className="body-copy font-medium">Founder introduction video</p>
        <p className="caption-copy max-w-[36ch]">
          Placeholder: swap in the real YouTube video ID in
          components/FounderVideo.tsx once the client supplies a founder-led
          talking-to-camera video.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-white">
      {!playing ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full flex items-center justify-center"
          aria-label="Play founder introduction video"
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
            alt="Founder introduction video thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/90 text-accent group-hover:scale-105 transition-transform">
            <PlayIcon className="w-7 h-7 ml-1" />
          </span>
        </button>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
          title="Founder introduction video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
