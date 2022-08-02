import { useState } from "react";
import { Ball, BallContainer } from "./styles";

export const ShyBall = () => {
  const [randomLeft, setRandomLeft] = useState<number>(Math.random() * 400);
  const [randomTop, setRandomTop] = useState<number>(Math.random() * 400);

  const handleMouseEvent = () => {
    setRandomLeft(Math.random() * 500);
    setRandomTop(Math.random() * 500);
  };

  return (
    <BallContainer>
      <Ball left={randomLeft} top={randomTop} onMouseEnter={handleMouseEvent} />
    </BallContainer>
  );
};
