interface EndModalProps {
  score: number;
  onTryAgain: () => void;
}

function EndModal({ score /* , onTryAgain */ }: EndModalProps) {
  return (
    <div>
      <div>FINAL SCORE</div>
      <br />
      <div>{score}</div>
      <br />
      <br />
      <br />
      {/* <div onClick={onTryAgain} style={{ cursor: "pointer" }}>
        YRITÄ UUDELLEEN
      </div>
      <br />
      */}
      <a href="/">
        <div>PALAA ETUSIVULLE</div>
      </a>
    </div>
  );
}

export default EndModal;
