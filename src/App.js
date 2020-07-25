import React from 'react';
import Navigation from './components/navigation';
import Book from './components/book';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Book page='home'/>
      <Book page='all'/>
    </div>
  );
}

export default App;
