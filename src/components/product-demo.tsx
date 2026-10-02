const PREVIEW_BACKGROUND_VIDEO = "/demo.mp4";

export function ProductDemo() {
  return (
    <div className="relative w-full max-w-full">
      <video
        src={PREVIEW_BACKGROUND_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none rounded-md object-cover select-none"
      />
    </div>
  );
}
