import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Campaign from './Campaign';

import filter from '../utils/filter';

export default class Outofdate extends Component {

  constructor() {
    super();

    this.state = { campaigns: null }
  }

  componentDidMount() {
    fetch('/api/campaigns')
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
          { campaigns  ? campaigns.map(campaign => (
            <Campaign key={campaign.campaign_id}
             name={campaign.name}
             block_size={campaign.block_size}
             block_time={campaign.block_time}
             from_date={campaign.from_date}
             to_date={campaign.to_date}/>
          )) : null }
        </ul>
        </div>
      </div>
    );
  }
}