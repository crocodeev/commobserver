import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class Campaign extends Component {

  render(){
    return(
      <li key={this.props.campaign_id}>
        <div className="collapsible-header">
          <div className="col s6">{this.props.name}</div>
          <div className="col s2">{this.props.block_size + "/" + this.props.block_time + " min"}</div>
          <div className="col s2">{this.props.from_date.slice(0,10)}</div>
          <div className="col s2">{this.props.to_date.slice(0,10)}</div>
        </div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    );
  }

}
