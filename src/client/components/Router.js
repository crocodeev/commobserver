import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ACTIVE_URL, FUTURE_URL, OUT_OF_DATE_URL } from "../urls";

import Active from "./Active";
import Future from "./Future";
import Outofdate from "./Outofdate";

import auth from "../utils/auth.js"


export default function Router () {
    return(
            <div>
            {
              auth.authenticated ?
              <Redirect from="/dashboard" to="/dashboard/active" /> :
              <Redirect from="/dashboard" to="/" />
            }
              <Route exact path={ACTIVE_URL} component={Active} />
              <Route exact path={FUTURE_URL} component={Future} />
              <Route exact path={OUT_OF_DATE_URL} component={Outofdate} />
            </div>
    );
}
