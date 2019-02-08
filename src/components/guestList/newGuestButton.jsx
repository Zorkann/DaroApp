import React, { Component } from "react";
import { Button } from "antd";

class NewGuestButton extends Component {
  render() {
    const { redirectToAddNewGuest } = this.props;
    return (
      <Button onClick={redirectToAddNewGuest} size="large">
        Dodaj nowego gościa
      </Button>
    );
  }
}

export default NewGuestButton;
