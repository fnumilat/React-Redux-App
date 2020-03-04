import React from 'react';
import './App.css';
import Quote from './Components/Quote';

function App() {
  return (
    <div className="App">
      <h1 className="Main-Title">Milat Random Quote</h1>
      <h2 className="Instruction">Click the button below to get a random quote from 5000 famous quotes in the world!</h2>
      <Quote/>
    </div>
  );
}

export default App;
