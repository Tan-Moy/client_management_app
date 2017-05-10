import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Form, Text, Select } from "react-form";
import { fetchData } from "../actions/action_creator";
import { deleteData } from "../actions/action_creator";
import { connect } from "react-redux";
import { FormDefaultProps } from "react-form";

class View extends Component {
  constructor() {
    super();

    this.state = null;
  }

  componentWillMount() {
    this.props.fetchData();
  }

  filterItems(query) {
    return this.props.customers.filter(
      item => item.SSN.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  render() {
    if (!this.props.customers) {
      return <div>Loading...</div>;
    } else if (this.state) {
      console.log("bello");
      return <Redirect to="/" />;
    } else {
      const personID = this.filterItems(this.props.match.params.id)[0];
      //console.log("personID: ", personID);
      return (
        <Form
          defaultValues={{
            firstName: personID.firstName,
            lastName: personID.lastName,
            email: personID.email,
            phoneNumber: personID.phoneNumber,
            cityName: personID.cityName,
            status: personID.status,
            SSN: personID.SSN
          }}
          onSubmit={values => {
            console.log("Success!", values);
            this.setState({}); //comment to stop auto redirection
            deleteData(values);
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
                  <Text field="firstName" placeholder="First Name" />
                  <Text field="lastName" placeholder="Last Name" />
                  <Text field="email" placeholder="Email" />
                  <Text field="phoneNumber" placeholder="Phone" />
                  <Text field="cityName" placeholder="City" />
                  <Text field="status" placeholder="Status" />
                  <button type="submit">Delete</button>
                </div>

              </form>
            );
          }}
        </Form>
      );
    }
  }
}
function mapStateToProps(state) {
  console.log("Recent: ", { customers: state.data[0] });
  return { customers: state.data[0] };
}

export default connect(mapStateToProps, { fetchData, deleteData })(View);
