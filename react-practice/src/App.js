import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["rger", "wf", "wfe"]);
  const [text, settext] = useState();
  const addItem = () => {
    settext("");
    const newList = [...list, text];
    setList(newList);
  };

  return (
    <div className="App">
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input value={text} onChange={(e) => settext(e.target.value)} />
      <button onClick={addItem}>Enter </button>
    </div>
  );
}

export default App;
