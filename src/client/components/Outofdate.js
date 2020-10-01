import React, { Component } from 'react';
import Campaign from './Campaign';
import HeaderExpandIcon from './HeaderExpandIcon';
import { IconVerticalAlign, Bold } from '../style/styles';

import filter from '../utils/filter';
import isCommercial from '../utils/isCommercial';

export default class Outofdate extends Component {

  constructor() {
    super();

    this.state = { campaigns: null }
  }

  componentDidMount() {
    fetch('/api/campaigns',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ token: localStorage.token})
    })
      .then(res => res.json())
      .then(data => filter.getOutOfDate(data))
      .then(data => this.setState({ campaigns: data }));
  }

  render() {

    const campaigns = this.state.campaigns;

    return (
      <div className="container">
        <div className="row">
        <ul className="collapsible">

        <li className="collection-header collapsible-header">
        <div className="col s1" style={IconVerticalAlign}>
        <HeaderExpandIcon />
        </div>
        <div className="col s5 valign-wrapper">
        <h6 style={Bold}>Campaign Name</h6>
        </div>
        <div className="col s2 valign-wrapper">
        <h6 style={Bold}>Frequency rotation</h6>
        </div>
        <div className="col s2 valign-wrapper">
        <h6 style={Bold}>Start date</h6>
        </div>
        <div className="col s2 valign-wrapper">
        <h6 style={Bold}>Stop date</h6>
        </div>
        </li>
        
        { campaigns  ? campaigns.map(campaign => {

          if(isCommercial(campaign.block_time)){
            return (
              <Campaign key={campaign.campaign_id}
               name={campaign.name}
               campaign_id={campaign.campaign_id}
               block_size={campaign.block_size}
               block_time={campaign.block_time}
               from_date={campaign.from_date}
               to_date={campaign.to_date}/>
            );
          }
        }) : null }
        </ul>
        </div>
      </div>
    );
  }
}
