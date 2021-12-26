import Main from './components/Main';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App() {
  let [sec, setSec] = useState(() => 1);
  let [min, setMin] = useState(() => 25);

  const onStart = () => {};

  return (
    <div className="App red">
      <div className="app-container">
        <NavBar />
        <Main sec={sec} min={min} />
      </div>
    </div>
  );
}

export default App;
