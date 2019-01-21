import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Child from './components/child'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="react-router">react router</Link></li>
            <li><Link to="LeoAshin">LeoAshin</Link></li>
            <li><Link to="justjavac">justjavac</Link></li>
            <li><Link to="react-Training">react-Training</Link></li>
          </ul>
          <hr/>
          <Route path="/:id" component={Child}></Route>
          </div>
      </Router>
    );
  }
}

export default App;
