import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

const SpriteSheet = () => {
  // Load the sprite sheet texture
  const texture = useLoader(
    THREE.TextureLoader,
    "/assets/animation/Sprite-phone-anim.png"
  );
  const frameRef = useRef(0); // To track the current frame

  const frameCount = 13; // Total frames
  const frameWidth = 1 / frameCount; // Width of each frame in UV space
  texture.wrapS = THREE.RepeatWrapping; // Enable horizontal wrapping
  texture.wrapT = THREE.RepeatWrapping;

  // Ensure the texture renders crisply for pixel art
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;

  useEffect(() => {
    texture.repeat.set(frameWidth, 1); // Display a single frame
  }, [texture, frameWidth]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const currentFrame = Math.floor(elapsedTime * 10) % frameCount; // Adjust 10 to control speed
    if (frameRef.current !== currentFrame) {
      frameRef.current = currentFrame;
      texture.offset.x = currentFrame * frameWidth; // Shift to the next frame
    }
  });

  return (
    <mesh>
      {/* Plane to display the texture */}
      <planeGeometry args={[14, 14]} />
      <meshBasicMaterial transparent map={texture} />
    </mesh>
  );
};

const Phone = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      // style={{ width: "100%", height: "100%" }}
      className="w-full h-full"
    >
      {/* Render the sprite sheet */}
      <SpriteSheet />
      {/* Enable orbit controls for navigation ??? */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Phone;
