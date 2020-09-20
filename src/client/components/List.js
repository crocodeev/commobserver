import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Campaign from './Campaign';

export default class List extends Component {

  constructor() {
    super();

    this.state = { campaigns: null }
  }

  componentDidMount() {
    fetch('/api/campaigns')
      .then(res => res.json())
      .then(data => this.setState({ campaigns: data }));
  }

  render() {

    const campaigns = this.state.campaigns;

    return (
      <div className="container">
        <div className="row">
        <ul className="collapsible">
          { campaigns  ? campaigns.data.map(campaign => (
            <Campaign key={campaign.campaign_id}
             campaign_id={campaign.campaign_id}
             name={campaign.name}
             from_date={campaign.from_date}
             to_date={campaign.to_date}/>
          )) : null }
        </ul>
        </div>
      </div>
    );
  }
}

