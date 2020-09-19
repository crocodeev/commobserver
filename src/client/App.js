import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import Navbar from './components/Navbar';
import Router from './components/Router';

export default class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    );
  }
}
