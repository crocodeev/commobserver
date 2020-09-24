import React, { Component } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import { mediaRequest } from '../../server/config/mediaRequest';

export default class Detail extends Component {


  constructor(){
    super();

    this.channelsToString = this.channelsToString.bind(this);
  }


  channelsToString(channelsArray){


    let resultString = channelsArray.reduce((sum, current) => {
      return sum + current.name + " ";
    }, "");

    return resultString;

  }


  render(){

    const displayStyle = this.props.shouldShow ? "block" : "none";

    return(
        <div className="collapsible-body" style={{display: displayStyle}}>
        <div className="row">
          <div className="col s2">
          <p>Channels:</p>
          </div>
          <div className="col s10">
            <p align="justify">{ this.props.channels ? this.channelsToString(this.props.channels) : null}</p>
          </div>
        </div>
        <div className="row">
          <div className="col s2">
          <p>Name:</p>
          </div>
          <div className="col s10">
            <p align="justify">{ this.props.channels ? this.props.content.original_name : null}</p>
          </div>
        </div>
        <div className="row">
            {this.props.content ?
              <ReactAudioPlayer className=""
              src={mediaRequest + this.props.content.fs_path}
              />
              : null }
        </div>
        </div>
    );
  }

}
