import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import 'materialize-css/dist/css/materialize.min.css';

import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

export default class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    );
  }
}
