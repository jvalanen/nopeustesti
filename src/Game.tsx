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
    <div className="w-full grid grid-rows-3">
      <div className="justify-self-center row-span-1">
        <div className="border-4 p-6">
          <ScoreCounter score={score} />
        </div>
      </div>

      <div className="justify-self-center row-span-2 pt-6">
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
