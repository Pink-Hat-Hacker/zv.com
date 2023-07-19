import React, { useState, useEffect } from "react";
import shipImage from "./assets/ship.png";
import LaserBeam from "./LaserBeam";

const SpaceInvaderShip: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isSpacePressed, setIsSpacePressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 17 }));
            } else if (event.key === "ArrowRight") {
                setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 17 }));
            } else if (event.key === " ") {
                setIsSpacePressed(true);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === " ") {
                setIsSpacePressed(false);
                console.log("pressing space")
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
  

    useEffect(() => {
        const handleResize = () => {
            setPosition((prevPosition) => ({ ...prevPosition, x: window.innerWidth / 2 }));
        };

        handleResize(); // Set initial position on component mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
            position: "absolute",
            bottom: "0",
            left: `${position.x}px`,
            transform: "translateX(-50%)",
            }}
        >
            <img className="shipImg" src={shipImage} alt="Space Invader Ship" />
            <LaserBeam position={{ x: position.x, y: position.y - 10 }} isFiring={isSpacePressed} />
        </div>
    );
};

export default SpaceInvaderShip;
