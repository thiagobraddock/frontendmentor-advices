import { useState } from 'react';
import './App.css';
import { AdviceCard } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <AdviceCard />
    </div>
  );
}

export default App;
