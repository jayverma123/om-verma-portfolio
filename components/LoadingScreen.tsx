"use client";

import { useEffect, useState } from "react";

const messages = [
  "INITIALIZING AI CORE...",
  "LOADING EMBEDDED SYSTEMS...",
  "CONNECTING IOT NETWORK...",
  "ACCESSING PROJECT DATABASE...",
  "LOADING NEURAL ENGINE...",
  "WELCOME OM VERMA",
];

export default function LoadingScreen({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < messages.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 700);

      return () => clearTimeout(timer);
    }

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 1200);

    return () => clearTimeout(finishTimer);
  }, [step, onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="font-mono text-cyan-400 text-xl">
        {messages.slice(0, step + 1).map((msg) => (
          <div key={msg} className="mb-2">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}