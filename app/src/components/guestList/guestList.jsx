import React, { useState, useEffect } from "react";
import Table from "./table";
import NewGuestButton from "./newGuestButton";

const GuestList = ({ history }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8082/users')
      .then(response => response.json())
      .then(users => setUsers(users.data))
      .catch(error => console.log(error))
  })

  const redirectToAddNewGuest = () => {
    const { push } = history;
    push("/add-new-guest");
  };

  return (
    <React.Fragment>
      <Table users={users} />
      <NewGuestButton redirectToAddNewGuest={redirectToAddNewGuest} />
    </React.Fragment>
  );

}

export default GuestList;
