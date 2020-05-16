import React from 'react';
import './App2.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
