import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleTick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    document.addEventListener("tick", handleTick);

    return () => {
      console.log("remove");
      document.removeEventListener("tick", handleTick);
    };
  }, [handleTick]);

  return (
    <>
      <div>Jess {count}</div>
    </>
  );
}

export default App;
