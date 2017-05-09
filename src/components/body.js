//<Route path="/roster" component={Roster} />
//<Route path="/schedule" component={Schedule} />

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Tiles from "./tiles";
import Tables from "./tables";

const Body = () => (
    <div>
        <Route exact path="/" component={Tiles} />
        <Route exact path="/" component={Tables} />
        <Route path="/tables/bello/" component={Tables} />
    </div>
);

export default Body;
