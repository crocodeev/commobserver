import React, { Component } from 'react';
import Campaign from './Campaign';

import filter from '../utils/filter';
import isCommercial from '../utils/isCommercial';

export default class Active extends Component {

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
      .then(data => filter.getActive(data))
      .then(data => this.setState({ campaigns: data }));
  }

  render() {

    const campaigns = this.state.campaigns;

    return (
      <div className="container">
        <div className="row">
        <ul className="collapsible">
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

/*
<Campaign key={campaign.campaign_id}
 name={campaign.name}
 campaign_id={campaign.campaign_id}
 block_size={campaign.block_size}
 block_time={campaign.block_time}
 from_date={campaign.from_date}
 to_date={campaign.to_date}/>
*/
