import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  let num = 0;
  const temp = document.getElementById("head");

  if (count > 10 && count < 20) {
    num = 10;
    temp.innerText = `${num} Count is hit now!`;
    temp.style.color = "red";
    temp.style.background = "yellow";
  } else if (count > 20) {
    num = 20;
    temp.innerText = `${num} Count is hit now!`;
    temp.style.color = "green";
    temp.style.background = "pink";
  }

  return (
    <div className="App">
      <h1>useEffect Hooks</h1>
      <h1>I have render {count} number of Times!</h1>
      <h1 id="head"></h1>
    </div>
  );
}
