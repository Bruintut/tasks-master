import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;


