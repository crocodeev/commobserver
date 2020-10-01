import React, { Component } from 'react';
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { ACTIVE_URL, FUTURE_URL, OUT_OF_DATE_URL } from '../urls.js';
import { ACTIVE, FUTURE, OUT_OF_DATE, DASHBOARD_NAME } from '../config/names';
import Router from './Router';
import auth from '../utils/auth';


import Active from './Active';

import { Header } from '../style/styles.js';

export default class Navbar extends Component {

    render(){

           return(
             <div>
               <nav className="nav-extended">
                   <div className="nav-wrapper grey lighten-3" style={Header}>
                   <a href="#" className="brand-logo grey-text text-darken-2">{DASHBOARD_NAME}</a>
                   </div>
                   <div className="nav-content">
                   <ul className="tabs tabs-transparent">
                       <li className="tab green darken-3"><Link to={ACTIVE_URL}>{ACTIVE}</Link></li>
                       <li className="tab yellow darken-3"><Link to={FUTURE_URL}>{FUTURE}</Link></li>
                       <li className="tab grey darken-3"><Link to={OUT_OF_DATE_URL}>{OUT_OF_DATE}</Link></li>
                   </ul>
                   </div>
               </nav>
               <Router />
             </div>
           );
         }

    }
