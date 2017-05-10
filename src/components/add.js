import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {
  Form,
  Text,
  Select,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  NestedForm,
  FormError
} from "react-form";
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
      <Form
        onSubmit={values => {
          this.props.createData(values);
          this.setState({});
          console.log("Success!", this.state);
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
            phoneNumber: !phoneNumber ? "Phone number is required" : undefined,
            cityName: !cityName ? "City Name is required" : undefined,
            status: !status ? "status is required" : undefined
          };
        }}
      >
        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm}>
              <Text field="firstName" placeholder="First Name" />
              <Text field="lastName" placeholder="Last Name" />
              <Text field="email" placeholder="Email" />
              <Text field="phoneNumber" placeholder="Phone" />
              <Text field="cityName" placeholder="City" />
              <Text field="status" placeholder="Status" />
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Form>
    );
  }
}

function mapStateToProps(state) {
  console.log("Recent: ", { customers: state.data[0] });
  return { customers: state.data[0] };
}

export default connect(mapStateToProps, { createData })(Add);
