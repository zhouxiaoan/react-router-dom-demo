import React, { Component } from 'react';
import { BrowserRouter, Route, Link, redirect } from 'react-router-dom'
import Home from './components/home/Home.js'
import About from './components/about/About';
import Topics from './components/topics/Topics.js';
var shan = {
  miao: {
    laoheshang: {
      jianggushi: function(){
        console.log("讲讲故事给小和尚")
      }
    },
    xiaoheshang: {}
  }
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/topics">tipics</Link></li>
          </ul>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
