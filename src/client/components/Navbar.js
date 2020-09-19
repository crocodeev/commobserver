import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ACTIVE_URL, FUTURE_URL, OUT_OF_DATE_URL } from '../urls.js';

export default class Navbar extends Component {

    render(){
        return(
            <nav className="nav-extended">
                <div className="nav-wrapper red lighten-3">
                <a href="#" className="brand-logo">START</a>
                </div>
                <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab green darken-3"><a href={ACTIVE_URL}>Active</a></li>
                    <li className="tab yellow darken-3"><a href={FUTURE_URL}>Future</a></li>
                    <li className="tab grey darken-3"><a href={OUT_OF_DATE_URL}>Out of date</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}