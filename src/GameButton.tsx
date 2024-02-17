import { useEffect, useState } from "react";
import "./GameButton.css";

export enum ColorEnum {
  Red = "red",
  Blue = "blue",
  Green = "green",
  Yellow = "yellow",
}

interface GameButtonProps {
  lightedUp: boolean;
  color: string;
}

function GameButton({ lightedUp, color }: GameButtonProps) {
  return (
    <div>
      <div>_{lightedUp && color}_</div>
    </div>
  );
}

export default GameButton;
