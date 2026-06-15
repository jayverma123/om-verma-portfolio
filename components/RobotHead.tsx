"use client";

import { useEffect, useState } from "react";

export default function RobotHead() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-40 h-40">

        {/* Head */}
        <div
          className="
          absolute inset-0
          rounded-3xl
          bg-zinc-900
          border
          border-cyan-400
          shadow-[0_0_40px_#00ffff55]
          "
        />

        {/* Left Eye */}
        <div
          className="
          absolute
          top-14
          left-10
          w-10
          h-10
          rounded-full
          bg-cyan-400
          flex
          items-center
          justify-center
          "
        >
          <div
            className="w-4 h-4 rounded-full bg-black"
            style={{
              transform: `translate(${mouse.x}px, ${mouse.y}px)`,
            }}
          />
        </div>

        {/* Right Eye */}
        <div
          className="
          absolute
          top-14
          right-10
          w-10
          h-10
          rounded-full
          bg-cyan-400
          flex
          items-center
          justify-center
          "
        >
          <div
            className="w-4 h-4 rounded-full bg-black"
            style={{
              transform: `translate(${mouse.x}px, ${mouse.y}px)`,
            }}
          />
        </div>

      </div>
    </div>
  );
}