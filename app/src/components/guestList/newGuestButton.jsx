import React from "react";
import { Button } from "antd";


const NewGuestButton = ({ redirectToAddNewGuest }) => (
  <Button onClick={redirectToAddNewGuest} size="large">
    Dodaj nowego gościa
      </Button>
)


export default NewGuestButton;
