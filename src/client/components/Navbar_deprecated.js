import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ACTIVE_URL, FUTURE_URL, OUT_OF_DATE_URL } from '../urls.js';

import { Header } from '../style/styles.js';

export default class Navbar extends Component {

    render(){
        return(
            <nav className="nav-extended">
                <div className="nav-wrapper grey lighten-3" style={Header}>
                <a href="#" className="brand-logo grey-text text-darken-2">Commercial Observer</a>
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
