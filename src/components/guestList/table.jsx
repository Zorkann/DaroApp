import React, { Component } from "react";
import { Table as TableAntd } from "antd";
import { columns } from "./tableColumns.js";

class Table extends Component {
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
        surname: "RamboX",
        hall: "2",
        tableNumber: "15",
        cost: `${150} zl`,
        couple: "7"
      }
    ]
  };

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
    return (
      <TableAntd
        rowSelection={rowSelection}
        dataSource={this.state.guests}
        columns={columns}
        style={{ padding: "30px" }}
      />
    );
  }
}

export default Table;
