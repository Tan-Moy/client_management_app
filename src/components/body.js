import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Tiles from "./tiles";
import Tables from "./tables";
import Add from "./add";
import Edit from "./edit";
import View from "./view";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Tables} />
        <Route path="/user/add" component={Add} />
        <Route path="/user/edit/:id" component={Edit} />
        <Route path="/user/view/:id" component={View} />
      </div>
    );
  }
}
