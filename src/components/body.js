//<Route path="/roster" component={Roster} />
//<Route path="/schedule" component={Schedule} />

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Tiles from "./tiles";
import Tables from "./tables";
import Add from "./add";

const Body = () => (
  <div>
    <Route exact path="/" component={Tables} />
    <Route path="/user/add" component={Add} />
    <Route path="/tables/bello/" component={Tables} />
  </div>
);

export default Body;
