import React, { useState } from "react";
import CircleButton from "./CircleButton";
import { GameButtonColor } from "./main";

interface GameButtonProps {
  lightedUp: boolean;
  buttonColor: GameButtonColor;
}

function GameButton({ lightedUp, buttonColor }: GameButtonProps) {
  const [isPushed, setIsPushed] = useState(false);

  const style = {
    display: "inline-block",
    margin: "10px",
  };

  const handleMouseDown = () => {
    setIsPushed(true);
  };

  const handleMouseUp = () => {
    setIsPushed(false);
  };

  return (
    <div style={style}>
      <CircleButton
        buttonColor={buttonColor}
        lightedUp={lightedUp}
        pushed={isPushed}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></CircleButton>
    </div>
  );
}

export default GameButton;
