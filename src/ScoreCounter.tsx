interface ScoreCounterProps {
  score: number;
}

function ScoreCounter({ score }: ScoreCounterProps) {
  const formattedScore = score.toString().padStart(4, "0");

  return (
    <div className="text-6xl md:text-8xl p-8 font-mono">{formattedScore}</div>
  );
}

export default ScoreCounter;
