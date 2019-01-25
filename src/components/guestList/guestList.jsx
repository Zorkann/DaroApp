import React, { Component } from "react";
import { Table, Button } from "antd";
import { columns } from "./tableColumns.js";
import "./guestList.style.css";

class GuestList extends Component {
  state = {
    guests: [
      {
        key: "1",
        name: "Mike",
        surname: "Tajson",
        hall: "1",
        tableNumber: "10",
        cost: `${150} zl`,
        couple: "4"
      },
      {
        key: "2",
        name: "John",
        surname: "Rambo",
        hall: "2",
        tableNumber: "15",
        cost: `${150} zl`,
        couple: "7"
      }
    ]
  };

  test = () => {};

  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: record => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name
      })
    };
    // inline styles have better priority than classNames
    return (
      <div style={{ padding: "20px" }}>
        <div>
          <Table
            rowSelection={rowSelection}
            dataSource={this.state.guests}
            columns={columns}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Button onClick={this.test} size={"large"}>
            Dodaj nowego gościa
          </Button>
        </div>
      </div>
    );
  }
}

export default GuestList;
