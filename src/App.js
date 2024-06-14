import React from "react";
import "./index.scss";
import ModalWindow from "./components/ModalWindow";

function App() {
  return (
    <div className="App">
      <button className="open-modal-btn">✨ Открыть окно</button>
      <ModalWindow/>
    </div>
  );
}

export default App;
