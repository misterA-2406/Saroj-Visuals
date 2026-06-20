import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Wireframe, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function AbstractReel() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    
    // Slight parallax based on pointer
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.pointer.x * -2, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.pointer.y * -2, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[3, 0.8, 256, 32]} />
        <MeshDistortMaterial 
          color="#FF6A1A" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.9} 
          roughness={0.1}
          distort={0.4}
          speed={1.5}
          wireframe={true}
          transparent={true}
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}
