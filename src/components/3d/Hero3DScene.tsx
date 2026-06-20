import React, { Suspense } from 'react';

const AbstractReelLazy = React.lazy(() => import('./AbstractReel').then(module => ({ default: module.AbstractReel })));
const EnvLazy = React.lazy(() => import('@react-three/drei').then(module => ({ default: module.Environment })));
const CanvasLazy = React.lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
      <Suspense fallback={
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,106,26,0.15)_0%,_transparent_70%)]" />
      }>
        <CanvasLazy camera={{ position: [0, 0, 10], fov: 45 }}>
           <fog attach="fog" args={['#0A0A0B', 8, 15]} />
           <ambientLight intensity={0.5} />
           <directionalLight position={[10, 10, 5]} intensity={1} />
           <directionalLight position={[-10, 10, -5]} intensity={0.5} />
           
           <AbstractReelLazy />
           <EnvLazy preset="city" />
        </CanvasLazy>
      </Suspense>
    </div>
  );
}
