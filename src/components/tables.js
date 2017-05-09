import React, { Component } from "react";
import { fetchData } from "../actions/action_creator";
import { connect } from "react-redux";

export default class Tables extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                These are tables.
            </div>
        );
    }
}
