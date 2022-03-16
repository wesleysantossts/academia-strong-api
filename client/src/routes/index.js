import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Page404 from "../pages/Page404";
import Home from "../pages/Home";
import SignOut from "../pages/SignOut";
// import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/signout" component={SignOut} /> 
      <Route path="*" component={Page404} /> 
    </Switch>
  );
}