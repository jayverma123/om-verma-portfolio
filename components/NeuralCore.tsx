"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function ParticleSphere() {
  const ref = useRef<any>(null);

  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 12000; i++) {
      const radius = 3;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
    }

    return new Float32Array(positions);
  }, []);

useFrame((state, delta) => {
  if (!ref.current) return;

  // Keep rotating
  ref.current.rotation.y += delta * 0.15;

  // Follow mouse smoothly
  ref.current.rotation.x +=
    (state.mouse.y * 0.8 - ref.current.rotation.x) * 0.05;

  ref.current.rotation.y +=
    (state.mouse.x * 0.3) * 0.05;
});

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function NeuralCore() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}