"use client";

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute top-80 right-40 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute bottom-40 left-1/3 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute bottom-20 right-1/4 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />

    </div>
  );
}