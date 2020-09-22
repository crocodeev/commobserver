import React, { Component } from 'react';
import Detail from './Detail';
import 'materialize-css/dist/css/materialize.min.css';

export default class Campaign extends Component {

  constructor(){
    super();

    this.state = {
      shouldShow: false,
      isRender: false
    }

    this.handleClick = this.handleClick.bind(this);

  }


  handleClick(){

    fetch(`/api/details?id=${this.props.campaign_id}`)
      .then(res => res.json())
      .then(data => console.log(data));

    this.setState(state => ({
      shouldShow: !state.shouldShow,
      isRender: true
    }))

  }

  render(){
    return(
      <li key={this.props.campaign_id} onClick={this.handleClick} >
        <div className="collapsible-header grey lighten-2">
          <div className="col s6">{this.props.name}</div>
          <div className="col s2">{this.props.block_size + "/" + this.props.block_time + " min"}</div>
          <div className="col s2">{this.props.from_date.slice(0,10)}</div>
          <div className="col s2">{this.props.to_date.slice(0,10)}</div>
        </div>
       {
         this.state.isRender ?
         <Detail shouldShow={this.state.shouldShow}/>
         :
         null
       }
      </li>
    );
  }

}
