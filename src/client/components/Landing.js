import React from 'react';
import { Link } from 'react-router-dom';
import { DASHBOARD } from '../urls';

export default function Landing () {

  return (
    <div className="container">
      <h1>Landing</h1>
      <p><Link to="/dashboard">View Dashboard</Link></p>
      <button>Log In</button>
    </div>
  )
};
