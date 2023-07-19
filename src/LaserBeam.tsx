import React, { useEffect } from "react";
import laserSound from "./laser_sound.mp3";

interface LaserBeamProps {
  position: { x: number; y: number };
  isFiring: boolean;
}

const LaserBeam: React.FC<LaserBeamProps> = ({ position, isFiring }) => {
  useEffect(() => {
    const playLaserSound = () => {
      const audio = new Audio(laserSound);
      audio.play();
    };

    if (isFiring) {
      // Perform the laser firing action here
      playLaserSound();
    }
  }, [isFiring]);

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        transform: "translateX(-50%)",
        width: "2px",
        height: "100%",
        backgroundColor: "red",
      }}
    />
  );
};

export default LaserBeam;
