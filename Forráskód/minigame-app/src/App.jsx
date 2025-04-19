import { useState } from 'react';
import './index.css';

function App() {
  const [target] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [results, setResults] = useState([]);

  const handleGuess = () => {
    const g = parseInt(guess);
    if (isNaN(g)) {
      setResults(prev => [...prev, '❗ Kérlek, írj be egy számot!']);
      return;
    }

    if (g === target) {
      setResults(prev => [...prev, '🎉 Talált! Új játékhoz frissítsd az oldalt.']);
    } else if (g < target) {
      setResults(prev => [...prev, `🔼 ${g} → Több`]);
    } else {
      setResults(prev => [...prev, `🔽 ${g} → Kevesebb`]);
    }
    setGuess('');
  };

  return (
    <div className="page">
      <div className="container">
        <h1>🎯 Mini Tippjáték</h1>
        <p>Tippelj egy számot 1 és 100 között!</p>

        <div className="inputRow">
          <input
            type="number"
            value={guess}
            onChange={e => setGuess(e.target.value)}
            placeholder="Pl.: 7"
          />
          <button onClick={handleGuess}>Tippelés</button>
        </div>

        <div className="result">
          {results.map((res, i) => (
            <p key={i}>{res}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
