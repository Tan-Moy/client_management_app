import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Text, Select } from "react-form";
import { createData } from "../actions/action_creator";
import { connect } from "react-redux";

class Add extends Component {
  constructor() {
    super();

    this.state = null;
  }
  render() {
    if (this.state) {
      console.log("bello");
      return <Redirect to="/" />;
    }
    return (
      <div className="addPage">
        <Form
          onSubmit={values => {
            values.SSN = `${Math.ceil(1000 * Math.random())}-${Math.ceil(1000 * Math.random())}-${Math.ceil(100 * Math.random())}`;
            this.props.createData(values);
            this.setState({}); //comment to stop auto redirection
            console.log("Success!", values);
          }}
          validate={values => {
            const {
              firstName,
              lastName,
              email,
              phoneNumber,
              cityName,
              status
            } = values;
            return {
              firstName: !firstName ? "firstName is required" : undefined,
              lastName: !lastName ? "lastName is required" : undefined,
              email: !email ? "emailId is required" : undefined,
              phoneNumber: !phoneNumber
                ? "Phone number is required"
                : undefined,
              cityName: !cityName ? "City Name is required" : undefined,
              status: !status ? "status is required" : undefined
            };
          }}
        >
          {({ submitForm, setAllValues }) => {
            return (
              <form onSubmit={submitForm}>
                <div>
                  <span>First Name</span>
                  <Text field="firstName" placeholder="First Name" />
                  <span>Last Name</span>
                  <Text field="lastName" placeholder="Last Name" />
                  <span>Email</span>
                  <Text field="email" placeholder="Email" />
                  <span>Phone</span>
                  <Text field="phoneNumber" placeholder="Phone" />
                  <span>City</span>
                  <Text field="cityName" placeholder="City" />
                  <span>Status</span>
                  <Text field="status" placeholder="Status" />
                  <div className="inlinebuttons">
                    <button
                      id="clear"
                      onClick={() =>
                        setAllValues({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phoneNumber: "",
                          cityName: "",
                          status: "",
                          SSN: ""
                        })}
                    >
                      Clear
                    </button>
                    <button id="submit" type="submit">Submit</button>
                  </div>
                </div>

              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default connect(null, { createData })(Add);
