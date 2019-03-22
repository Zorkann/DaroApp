import React, { Component } from "react";
import Table from "./table";
import NewGuestButton from "./newGuestButton";

class GuestList extends Component {
  componentDidMount() {
    fetch('http://192.168.1.115:5000/api/v1/todosGet')
      .then(response => response.json())
      .then(data => console.log(data.todos))
      .catch(error => console.log(error))
  }

  redirectToAddNewGuest = () => {
    const { push } = this.props.history;
    push("/add-new-guest");
  };

  render() {
    return (
      <React.Fragment>
        <Table />
        <NewGuestButton redirectToAddNewGuest={this.redirectToAddNewGuest} />
      </React.Fragment>
    );
  }
}

export default GuestList;
