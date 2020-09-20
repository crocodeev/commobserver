import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class Details extends Component {



  render(){

    return(
        <div className="collapsible-body" style={{ display: this.props.shouldShow}} >
          <h1>HERE COMES DETAILS</h1>
        </div>
    );
  }

}
