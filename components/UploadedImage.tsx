"use client";

import { useState } from "react";

/**
 * Tries to render an image from public/images/uploads/. Falls back to the
 * given placeholder if the file hasn't been uploaded yet, so the client
 * can drop a file into that folder via GitHub and have it appear without
 * another code change.
 */
export default function UploadedImage({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
