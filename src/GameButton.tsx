import { useState } from "react";
import CircleButton from "./CircleButton";
import { GameButtonColor } from "./main";

interface GameButtonProps {
  lightedUp: boolean;
  buttonColor: GameButtonColor;
  onPress: Function;
}

function GameButton({ lightedUp, buttonColor, onPress }: GameButtonProps) {
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
        onTouchStart={handleClick}
      ></CircleButton>
    </div>
  );
}

export default GameButton;
