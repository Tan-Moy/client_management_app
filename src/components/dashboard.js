import React, { Component } from "react";
import Header from "./header";
import Body from "./body";
import json from "../actions/data.json";

console.log(json);
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}
