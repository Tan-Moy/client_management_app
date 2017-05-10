import React, { Component } from "react";

export default class Tiles extends Component {
  filterItems(query) {
    return this.props.hello.filter(
      item => item.status.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  render() {
    const total = this.props.hello.length;
    const active = this.filterItems("active");
    const passive = this.filterItems("passive");
    const pipeline = this.filterItems("pipeline");
    const prospect = this.filterItems("prospect");
    console.log("tiles:", this.props.hello);
    console.log(this.filterItems("active"));

    return (
      <div id="tiles">
        <div>total: {total}</div>
        <div>active: {active.length}</div>
        <div>passive: {passive.length}</div>
        <div>pipeline: {pipeline.length}</div>
        <div>prospect: {prospect.length}</div>
      </div>
    );
  }
}
