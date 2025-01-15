import React from "react";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

const SpriteSheet = () => {
  // Load the sprite sheet texture once and reuse it
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const loadedTexture = loader.load(
      "/assets/animation/Sprite-phone-anim.png"
    );
    // Ensure the texture renders crisply for pixel art
    loadedTexture.generateMipmaps = false;
    // loadedTexture.minFilter = THREE.NearestFilter;
    // loadedTexture.magFilter = THREE.NearestFilter;
    loadedTexture.anisotropy = 0;
    return loadedTexture;
  }, []);

  const frameRef = useRef(0); // To track the current frame
  const frameCount = 20; // Total frames
  const frameWidth = 1 / frameCount; // Width of each frame in UV space

  texture.wrapS = THREE.RepeatWrapping; // Enable horizontal wrapping
  texture.wrapT = THREE.RepeatWrapping;

  useEffect(() => {
    texture.repeat.set(frameWidth, 1); // Display a single frame
  }, [texture, frameWidth]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const currentFrame = Math.floor(elapsedTime * 8) % frameCount; // Adjust 10 to control speed
    texture.offset.x = currentFrame * frameWidth;
    if (frameRef.current !== currentFrame) {
      frameRef.current = currentFrame;
      texture.offset.x = currentFrame * frameWidth; // Shift to the next frame
    }
  });

  return (
    <mesh>
      {/* Plane to display the texture */}
      <planeGeometry args={[28, 28]} />
      <meshBasicMaterial transparent map={texture} />
    </mesh>
  );
};

const Phone = React.memo(() => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, precision: "highp" }}
      camera={{ position: [0, 0, 10], zoom: 1 }}
      className=" rounded p-1 md:p-0"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Render the sprite sheet */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <SpriteSheet />
      {/* Enable orbit controls for navigation ??? */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
});

export default Phone;
