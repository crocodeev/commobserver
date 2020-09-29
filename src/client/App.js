import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";

import 'materialize-css/dist/css/materialize.min.css';

import ProtectedRoute from './components/ProtectedRoute';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

import auth from './utils/auth.js';

export default class App extends Component {

  constructor(){
    super();
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
