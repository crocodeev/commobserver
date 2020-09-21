import React, { Component } from 'react';
import Details from './Details';
import 'materialize-css/dist/css/materialize.min.css';

export default class Campaign extends Component {

  constructor(){
    super();
    
    this.state = {
      isOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){

    console.log(this);

    fetch(`/api/details?${this.props.campaign_id}`)
      .then(res => res.json())
      .then(data => console.log(data));

    this.setState(state => ({
      isOpen: !state.isOpen
    }))

  }

  render(){
    return(
      <li key={this.props.campaign_id} onClick={this.handleClick}>
        <div className="collapsible-header grey lighten-2">
          <div className="col s6">{this.props.name}</div>
          <div className="col s2">{this.props.block_size + "/" + this.props.block_time + " min"}</div>
          <div className="col s2">{this.props.from_date.slice(0,10)}</div>
          <div className="col s2">{this.props.to_date.slice(0,10)}</div>
        </div>
        <Details shouldShow={this.state.isOpen ? "block" : "hide"}/>
      </li>
    );
  }

}
