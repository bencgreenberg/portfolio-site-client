import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarInstance from './components/Navbar';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <div className="App-header">
        {Header}
        {NavbarInstance}
      </div>
      <br /><br /><br />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br />
        < ReactRouter />
        <div className="footer">
          { Footer }
        </div>
    </div>
    );
  }
}

export default App;
