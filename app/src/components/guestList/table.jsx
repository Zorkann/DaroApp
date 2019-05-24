import React, { Component } from "react";
import { Table as TableAntd } from "antd";
import { columns } from "./tableColumns.js";

class Table extends Component {
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
        dataSource={this.props.users}
        columns={columns}
        rowKey={'id'}
        style={{ padding: "30px" }}
      />
    );
  }
}

export default Table;
