import React from 'react';
import AppNavbar from './components/AppNavbar';
import BookList from './components/BookList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <BookList />
    </div>
  );
}

export default App;
