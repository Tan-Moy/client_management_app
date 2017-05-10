import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>This is the header</h1>
        <h6>Should Contain the add button</h6>
        <Link to="/user/add"><button>Add</button></Link>
        <Link to="/"><button>Home</button></Link>
      </div>
    );
  }
}
