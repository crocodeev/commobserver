import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import 'materialize-css/dist/css/materialize.min.css';

import ProtectedRoute from './components/ProtectedRoute';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      isLogin: false,
    }

  }


  render() {
    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <ProtectedRoute path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}
