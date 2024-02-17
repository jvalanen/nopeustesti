import { useCallback, useEffect, useState } from "react";
import "./App.css";
import GameButton from "./GameButton";
import { GameButtonColor, TickEvent } from "./main.tsx";

function App() {
  const [playQueue, setPlayQueue]: [GameButtonColor[], Function] = useState([]);
  const [lightedUp, setLightedUp] = useState(GameButtonColor.Red);

  const handleTick = useCallback((event: TickEvent) => {
    setPlayQueue((prevPlayQueue: GameButtonColor[]) => {
      const playQueue = [...prevPlayQueue];
      playQueue.push(event.detail.color);
      return playQueue;
    });
  }, []);

  useEffect(() => {
    setLightedUp(playQueue[playQueue.length - 1]);
  }, [playQueue]);

  useEffect(() => {
    document.addEventListener("tick", handleTick as any);

    return () => {
      document.removeEventListener("tick", handleTick as any);
    };
  }, [handleTick]);

  return (
    <>
      <div>PlayQueue: {playQueue.length}</div>
      <GameButton
        lightedUp={lightedUp == GameButtonColor.Red}
        color={GameButtonColor.Red}
      />
      <GameButton
        lightedUp={lightedUp == GameButtonColor.Blue}
        color={GameButtonColor.Blue}
      />
      <GameButton
        lightedUp={lightedUp == GameButtonColor.Green}
        color={GameButtonColor.Green}
      />
      <GameButton
        lightedUp={lightedUp == GameButtonColor.Yellow}
        color={GameButtonColor.Yellow}
      />
    </>
  );
}

export default App;
