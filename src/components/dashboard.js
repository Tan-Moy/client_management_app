import React, { Component } from "react";
import Header from "./header";
import Body from "./body";

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
