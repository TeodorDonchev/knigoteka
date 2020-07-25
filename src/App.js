import React from 'react';
import Navigation from './components/navigation';
import Book from './components/book';
import PageTitle from './components/title';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PageTitle text="Most Liked Books"/>
      <Book page='home'/>
      <PageTitle text="About"/>
    </div>
  );
}

export default App;
