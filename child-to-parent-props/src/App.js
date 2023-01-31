import './App.css';
import { useState } from 'react'
import Child from './components/Child';
import ChildParentProps from './components/ChildParentProps';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Child name="Ridhdhi Kheni" />

        <ChildParentProps setCount={setCount} />
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
