import React from 'react';
import CardList from './CardList';
import './App.css';

function App() {
  return (
    <div className="ReactApp">
      <h1>Developer Cards</h1>
      <p>To view the app, clone the repository and <code>run.json</code> file.</p>
      <CardList />
    </div>
  );
}

export default App;
