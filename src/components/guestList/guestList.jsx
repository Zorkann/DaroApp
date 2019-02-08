import React, { Component } from "react";
import Table from "./table";
import NewGuestButton from "./newGuestButton";

class GuestList extends Component {
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
