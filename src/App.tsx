import { useCallback, useEffect, useState } from "react";
import "./App.css";
import GameButton from "./GameButton";
import { GameButtonColor, TickEvent } from "./main.tsx";

function App() {
  const [playQueue, setPlayQueue]: [GameButtonColor[], Function] = useState([]);
  const [lightedUp, setLightedUp] = useState(Object.values(GameButtonColor)[0]);

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

      {/* Render buttons */}
      {Object.values(GameButtonColor).map((buttonColor) => {
        return (
          <GameButton
            lightedUp={lightedUp == buttonColor}
            color={buttonColor}
          />
        );
      })}
    </>
  );
}

export default App;
