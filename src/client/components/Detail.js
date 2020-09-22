import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class Detail extends Component {



  render(){

    const displayStyle = this.props.shouldShow ? "block" : "none";

    console.log(displayStyle);

    return(
        <div className="collapsible-body" style={{display: displayStyle}}>
          <h1>HERE COMES DETAILS</h1>
        </div>
    );
  }

}
