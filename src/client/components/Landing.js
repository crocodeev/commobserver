import React from 'react';
import { Link } from 'react-router-dom';
import { DASHBOARD } from '../urls';
import auth from '../utils/auth';

//Change inputs color

export default function Landing (props) {

  function setCredentials(event){
    auth.[event.target.id] = event.target.value;
  }

  function toDashboard(){
    props.history.push("/dashboard");
  }

  return (
    <div className="container grey lighten-3">
      <div className="valign-wrapper">
        <div className="row">
         <h1 className="center-align grey-text text-darken-2">Commercial Observer</h1>
        </div>
      </div>
      <div className="row">
       <div className="input-field col s6 offset-s3">
        <input placeholder="Login" id="user" type="text" className="validate" onChange={(event) => {setCredentials(event)}}/>
       </div>
      </div>
      <div className="row">
       <div className="input-field col s6 offset-s3">
        <input placeholder="Password" id="password" type="password" className="validate" onChange={(event) => {setCredentials(event)}}/>
       </div>
      </div>
      <div className="row">
       <div className="col s2 offset-s9">
        <button
         className="btn-large waves-effect waves-light green darken-3"
         type="submit"
         name="action"
         onClick={() => {auth.login(toDashboard)}}>Submit</button>
       </div>
      </div>
      <div className="row">
      </div>
    </div>
  )
};
