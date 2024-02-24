import { useCallback, useEffect, useState } from "react";
import GameButton from "./GameButton";
import { GameButtonColor, TickEvent } from "./main.tsx";
import ScoreCounter from "./ScoreCounter.tsx";

interface GameProps {
  onGameEnd: (score: number) => void;
}

function Game({ onGameEnd }: GameProps) {
  const [score, setScore]: [number, Function] = useState(0);
  const [playQueue, setPlayQueue]: [GameButtonColor[], Function] = useState([]);
  const [lightedUp, setLightedUp]: [GameButtonColor | null, Function] =
    useState(null);

  const handleTick = useCallback((event: TickEvent) => {
    setPlayQueue((prevPlayQueue: GameButtonColor[]) => {
      const playQueue = [...prevPlayQueue];
      playQueue.push(event.detail.color);
      return playQueue;
    });
  }, []);

  const handleGameButtonPress = useCallback(
    (pressedColor: GameButtonColor) => {
      const correctPress = playQueue[0];
      if (pressedColor == correctPress) {
        playQueue.shift();
        setPlayQueue(playQueue);
        setScore((prevScore: number) => prevScore + 1);
        return;
      }
      onGameEnd(score);
    },
    [playQueue]
  );

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
    <div className="grid grid-rows-2 flex items-center border-4 border-slate-300 py-6">
      <div className="justify-self-center border-4 mb-5">
        <ScoreCounter score={score} />
      </div>

      <div className="justify-self-center">
        {/* Render buttons */}
        {Object.values(GameButtonColor).map((buttonColor) => {
          return (
            <GameButton
              key={buttonColor}
              lightedUp={lightedUp == buttonColor}
              buttonColor={buttonColor}
              onPress={handleGameButtonPress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Game;
