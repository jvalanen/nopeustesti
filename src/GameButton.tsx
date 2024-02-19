import { useState } from "react";
import CircleButton from "./CircleButton";
import { GameButtonColor } from "./main";

interface GameButtonProps {
  lightedUp: boolean;
  buttonColor: GameButtonColor;
  onPress: Function;
}

function GameButton({ lightedUp, buttonColor, onPress }: GameButtonProps) {
  const [isPushed, setIsPushed] = useState(false);
  const [className, setClassname] = useState("");

  const handleClick = () => {
    /* Notify button press to parent */
    onPress(buttonColor);

    /* Play animation */
    setClassname("click");
    setTimeout(() => {
      setClassname("");
    }, 100);
  };

  const handleMouseDown = () => {
    setIsPushed(true);
  };

  const handleMouseUp = () => {
    setIsPushed(false);
  };

  return (
    <div
      style={{
        display: "inline-block",
        margin: "10px",
      }}
    >
      <CircleButton
        className={className}
        onClick={handleClick}
        buttonColor={buttonColor}
        lightedUp={lightedUp}
        pushed={isPushed}
        onTouchStart={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></CircleButton>
    </div>
  );
}

export default GameButton;
