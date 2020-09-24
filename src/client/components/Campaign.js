import React, { Component } from 'react';
import Detail from './Detail';
import ExpandIcon from './ExpandIcon';
import 'react-h5-audio-player/lib/styles.css'

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
      .then(data => this.setState(
        {
          channels: data.channels,
          content: data.content[0]
        }
      ));

    this.setState(state => ({
      shouldShow: !state.shouldShow,
      isRender: true
    }))

  }

  render(){

    return(
      <li key={this.props.campaign_id}>
        <div className="collapsible-header grey lighten-3" onClick={this.handleClick}>
          <div className="col s1">
          <ExpandIcon shouldShow={this.state.shouldShow} />
          </div>
          <div className="col s6">
          {this.props.name}
          </div>
          <div className="col s2">{this.props.block_size + "/" + this.props.block_time + " min"}</div>
          <div className="col s2">{this.props.from_date.slice(0,10)}</div>
          <div className="col s2">{this.props.to_date.slice(0,10)}</div>
        </div>
       {
         this.state.isRender ?
         <Detail shouldShow={this.state.shouldShow}
                 channels={this.state.channels}
                 content={this.state.content}
         />
         :
         null
       }
      </li>
    );
  }

}
