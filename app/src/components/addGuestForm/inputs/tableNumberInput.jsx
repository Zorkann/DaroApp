import React from "react";
import { Form, Select } from "antd";

const Option = Select.Option;

const TableNumberInput = ({ getFieldDecorator }) => (
  <Form.Item label="Numer stolika">
    {getFieldDecorator("tableNumber", {
      rules: [
        {
          required: true,
          message: "Wpisz numer stolika"
        }
      ]
    })(
      <Select
        showSearch
        placeholder="Wybierz numer stolika"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.props.children
            .toLowerCase()
            .indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
    )}
  </Form.Item>
)

export default TableNumberInput;
