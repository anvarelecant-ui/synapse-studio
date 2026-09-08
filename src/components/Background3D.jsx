import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const SculpturalCore = ({ mouse }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle, slow, organic motion with mouse inertia
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        time * 0.05 + mouse.current.x * 0.25,
        0.04
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        Math.sin(time * 0.08) * 0.12 + mouse.current.y * 0.2,
        0.04
      );
      meshRef.current.position.y = Math.sin(time * 0.3) * 0.12;
    }
  });

  return (
    <Float speed={1.0} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.08}
          metalness={0.15}
          distort={0.22}
          speed={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transmission={0.4}
          thickness={0.8}
        />
      </mesh>
    </Float>
  );
};

export default function Background3D() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.4} />
      <directionalLight position={[10, 15, 10]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.9} color="#bae6fd" />
      <pointLight position={[0, -5, 5]} intensity={0.6} color="#fed7aa" />
      
      <SculpturalCore mouse={mouse} />
    </Canvas>
  );
}
