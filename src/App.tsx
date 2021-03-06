import React from 'react';
import logo from './logo.svg';
import me from './me.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => alert('זכית בי')}>
          <img src={me} className="App-logo" alt="logo" />
        </div>
        <p>
          Sup
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=WjQgsyPkuCk"
          target="_blank"
          rel="noopener noreferrer"
        >
          SECRET
        </a>
      </header>
    </div>
  );
}

export default App;
