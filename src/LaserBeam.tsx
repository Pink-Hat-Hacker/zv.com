import React, { useEffect, useState } from "react";
let audioUrl = require('./assets/laser_sound.mp3');
interface LaserBeamProps {
  x: number;
  onLaserFired: () => void;
}

const LaserBeam: React.FC<LaserBeamProps> = ({ x, onLaserFired }) => {
  const [y, setY] = useState(window.innerHeight);

  useEffect(() => {
    const interval = setInterval(() => {
      setY((prevY) => prevY - 20);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (y < 0) {
      setY(window.innerHeight);
      onLaserFired();
    }
  }, [y, onLaserFired]);

  useEffect(() => {
    const playLaserSound = () => {
      const audio = new Audio(audioUrl);
      audio.play();
    };

    playLaserSound();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        transform: "translateX(-50%)",
        width: "5px",
        height: "30px",
        backgroundColor: "red",
      }}
    />
  );
};
export default LaserBeam;


