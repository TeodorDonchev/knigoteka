import React from 'react';
import Navigation from './components/navigation';
import Book from './components/book';
import PageTitle from './components/title';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PageTitle text="Most Liked Books"/>
      <Book page='home'/>
      <PageTitle text="About"/>
      <About text="Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
    Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
      Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others.
     
      Knigoteka is a place where you can recommend the books that you have read. When you have an account we will provide you with the abillity to share thoughts to the books you've added and like others."/>
    </div>
  );
}

export default App;
