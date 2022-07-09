import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // useState keeps an internal state in the component
  const [text, setText] = React.useState(times);

  setText('My First React App');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
          {counts}
        </p>
      </header>
    </div>
  );
}

export default App;
