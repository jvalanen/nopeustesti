interface ScoreCounterProps {
  score: number;
}

function ScoreCounter({ score }: ScoreCounterProps) {
  const formattedScore = score.toString().padStart(4, "0");

  return <div className="text-2xl md:text-6xl font-mono">{formattedScore}</div>;
}

export default ScoreCounter;
