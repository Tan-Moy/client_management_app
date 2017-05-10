import React, { Component } from "react";
import { fetchData } from "../actions/action_creator";
import { connect } from "react-redux";
import Tiles from "./tiles";

class Tables extends Component {
  constructor(props) {
    super(props);

    this.showData = this.showData.bind(this);
  }

  componentWillMount() {
    this.props.fetchData();
  }

  showData(item) {
    let id = Math.ceil(10000000 * Math.random());
    let name = `${item.firstName} ${item.lastName}`;
    let bName = `${item.lastName} & CO.`;
    let email = item.email;
    let phone = item.phoneNumber;
    let city = item.cityName;
    //console.log(bName);
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{bName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{city}</td>
        <td>
          <span>edit </span>
          <span>view </span>
          <span>delete </span>
        </td>
      </tr>
    );
  }

  render() {
    if (!this.props.customers) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <td id="spinner">Loading..</td>
              </tr>
            </thead>
          </table>
        </div>
      );
    }

    return (
      <div>
        <div>
          <Tiles hello={this.props.customers} />
        </div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Business</td>
              <td>Email</td>
              <td>Phone</td>
              <td>City</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map(this.showData)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Recent: ", { customers: state.data[0] });
  return { customers: state.data[0] };
}

export default connect(mapStateToProps, { fetchData })(Tables);
