import React, { Component } from "react";
import Table from "./table";
import NewGuestButton from "./newGuestButton";

class GuestList extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8082/users')
      .then(response => response.json())
      .then(users => this.setState({
        users: users.data
      }))
      .catch(error => console.log(error))
  }

  redirectToAddNewGuest = () => {
    const { push } = this.props.history;
    push("/add-new-guest");
  };

  render() {
    return (
      <React.Fragment>
        <Table users={this.state.users} />
        <NewGuestButton redirectToAddNewGuest={this.redirectToAddNewGuest} />
      </React.Fragment>
    );
  }
}

export default GuestList;
