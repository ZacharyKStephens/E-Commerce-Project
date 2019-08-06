import React from 'react';
import Classlist from './components/Classlist';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Marky Mark', 'The Funky Bunch'];
  return (
    <div className="App">
      <h1>You have no class.</h1>
      {<Classlist names={names}/>}
    </div>
  );
}

export default App;
