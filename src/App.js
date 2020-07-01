import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Alert from './components/Alert/Alert';
import {AlertState} from './context/alert/AlertState';
import {GithubState} from './context/github/GithubState';

function App() {
  return (
    <>
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}}/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
    </>
  );
}

export default App;
