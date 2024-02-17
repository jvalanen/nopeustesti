import { useCallback, useEffect, useState } from "react";
import "./App.css";
import GameButton, { ColorEnum } from "./GameButton";

function App() {
  const [playQueue, setPlayQueue]: [any, any] = useState([]);
  const [lightedUp, setLightedUp] = useState(ColorEnum.Red);

  const colors = [
    ColorEnum.Red,
    ColorEnum.Blue,
    ColorEnum.Green,
    ColorEnum.Yellow,
  ];

  useEffect(() => {
    const nonLightedUpColors = colors.filter((color) => {
      return color !== lightedUp;
    });
    setLightedUp(nonLightedUpColors[Math.floor(Math.random() * 100) % 3]);
  }, [playQueue]);

  const handleTick = useCallback((event: any) => {
    setPlayQueue((prevPlayQueue: any) => {
      const playQueue = [...prevPlayQueue];
      playQueue.push(event.detail.color);
      return playQueue;
    });
  }, []);

  useEffect(() => {
    document.addEventListener("tick", handleTick);

    return () => {
      document.removeEventListener("tick", handleTick);
    };
  }, [handleTick]);

  return (
    <>
      <div>PlayQueue: {playQueue.length}</div>
      <GameButton
        lightedUp={lightedUp == ColorEnum.Red}
        color={ColorEnum.Red}
      />
      <GameButton
        lightedUp={lightedUp == ColorEnum.Blue}
        color={ColorEnum.Blue}
      />
      <GameButton
        lightedUp={lightedUp == ColorEnum.Green}
        color={ColorEnum.Green}
      />
      <GameButton
        lightedUp={lightedUp == ColorEnum.Yellow}
        color={ColorEnum.Yellow}
      />
    </>
  );
}

export default App;
