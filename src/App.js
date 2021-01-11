import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import CV from './components/pages/CV';
import Aboutme from './components/pages/Aboutme';

  
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Projects' component={Projects} />
            <Route path='/CV' component={CV} />
            <Route path='/Aboutme' component={Aboutme} />
          </Switch>
      </Router>
      
    </>
  );
}

export default App;
