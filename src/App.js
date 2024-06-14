import React, { useState } from "react";
import "./index.scss";
import ModalWindow from "./components/ModalWindow";


function App() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="App">
      <button onClick={()=>setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
       <ModalWindow setOpen={setOpen} open={open} />
    </div>
  );
}

export default App;
