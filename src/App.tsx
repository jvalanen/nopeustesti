import { useCallback, useEffect, useState } from "react";
import GameButton from "./GameButton";
import { GameButtonColor, TickEvent } from "./main.tsx";

function App() {
  const [playQueue, setPlayQueue]: [GameButtonColor[], Function] = useState([]);
  const [lightedUp, setLightedUp] = useState(Object.values(GameButtonColor)[0]);

  const style: object = { "min-width": "650px" };

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
    <div style={style}>
      <div>PlayQueue: {playQueue.length}</div>

      {/* Render buttons */}
      {Object.values(GameButtonColor).map((buttonColor) => {
        return (
          <GameButton
            key={buttonColor}
            lightedUp={lightedUp == buttonColor}
            buttonColor={buttonColor}
          />
        );
      })}
    </div>
  );
}

export default App;
