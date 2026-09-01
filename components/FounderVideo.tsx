"use client";

import { useEffect, useRef, useState } from "react";
import { PauseIconSolid, PlayIcon, VolumeIcon, VolumeMuteIcon } from "./icons";

const VIDEO_ID = "TlQmifdkX24";

/**
 * Autoplay-with-sound is blocked by every major browser's autoplay policy
 * regardless of embed params, so this starts muted (the only reliable
 * autoplay) and loops silently, with a custom mute/pause control bar and a
 * brief "tap for sound" nudge. YouTube embeds are also required by
 * YouTube's own terms to stay identifiable, so this hides as much of the
 * native player chrome as the embed API allows (no controls, no
 * title/channel overlay) rather than claiming to fully disguise the source.
 */
export default function FounderVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [showNudge, setShowNudge] = useState(false);

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

  useEffect(() => {
    if (!shouldLoad) return;
    const showTimer = setTimeout(() => setShowNudge(true), 800);
    const hideTimer = setTimeout(() => setShowNudge(false), 5000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [shouldLoad]);

  const postCommand = (func: string) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  };

  const toggleMute = () => {
    postCommand(muted ? "unMute" : "mute");
    setMuted(!muted);
    setShowNudge(false);
  };

  const togglePlay = () => {
    postCommand(playing ? "pauseVideo" : "playVideo");
    setPlaying(!playing);
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
    <div
      ref={containerRef}
      className="rounded-2xl overflow-hidden bg-ink shadow-xl"
    >
      <div className="flex items-center gap-1.5 h-8 px-4 bg-ink">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>

      <div className="relative w-full aspect-video bg-black">
        {shouldLoad && (
          <>
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${params.toString()}`}
              title="Founder introduction video"
              allow="autoplay; encrypted-media; picture-in-picture"
            />

            {showNudge && (
              <div className="absolute bottom-14 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-ink text-[13px] font-medium shadow-lg animate-pulse">
                Tap for sound
              </div>
            )}

            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                {playing ? (
                  <PauseIconSolid className="w-4 h-4" />
                ) : (
                  <PlayIcon className="w-4 h-4 ml-0.5" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                {muted ? <VolumeMuteIcon className="w-4 h-4" /> : <VolumeIcon className="w-4 h-4" />}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
