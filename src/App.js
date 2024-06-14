
import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);
  const decCount = () => {
    setCount(count-1)
  }
  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decCount} className="minus">- Минус</button>
        <button onClick={incCount} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
