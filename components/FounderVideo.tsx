"use client";

import { useEffect, useRef, useState } from "react";
import { PlayIcon, VolumeIcon, VolumeMuteIcon } from "./icons";

const VIDEO_ID = "TlQmifdkX24";

/**
 * Autoplay-with-sound is blocked by every major browser's autoplay policy
 * regardless of embed params, so this starts muted (the only reliable
 * autoplay) and loops silently, with a small custom unmute control. YouTube
 * embeds are also required by YouTube's own terms to stay identifiable, so
 * this hides as much of the native player chrome as the embed API allows
 * (no controls, no title/channel overlay, no related-video branding) rather
 * than claiming to fully disguise the source.
 */
export default function FounderVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;
    const command = muted ? "unMute" : "mute";
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args: [] }),
      "*"
    );
    setMuted(!muted);
  };

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

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: VIDEO_ID,
    controls: "0",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    playsinline: "1",
    enablejsapi: "1",
  });

  return (
    <div ref={containerRef} className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-white">
      {shouldLoad && (
        <>
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${params.toString()}`}
            title="Founder introduction video"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute bottom-3 right-3 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-ink/70 text-white hover:bg-ink/90 transition-colors"
          >
            {muted ? <VolumeMuteIcon className="w-4 h-4" /> : <VolumeIcon className="w-4 h-4" />}
          </button>
        </>
      )}
    </div>
  );
}
