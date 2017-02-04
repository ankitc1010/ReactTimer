var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Coyan from 'Coyan';
import StopWatch from 'StopWatch';
import CountDown from 'CountDown';
import 'material-design-lite/material.min.js';
import 'reactMdlCss';
import 'applicationStyles';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Coyan}/>
      <Route path="/stopwatch" component={StopWatch}/>
      <Route path="/countdown" component={CountDown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
