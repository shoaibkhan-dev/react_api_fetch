import { useState } from "react";
import "./App.css";
import Users from "./components/Users/Users";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount(count + 1);

  return (
    <>
      <h1>This is UI from APP component</h1>
      <div>Count: {count}</div>
      <button onClick={handleCount}>Increase Count</button>
      <Users />
    </>
  );
}

export default App;
