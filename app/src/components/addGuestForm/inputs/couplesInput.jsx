import React from "react";
import { Form, Select } from "antd";

const Option = Select.Option;

const CouplesInput = ({ getFieldDecorator }) => (
  <Form.Item label="Ilość par">
    {getFieldDecorator("couples", {
      rules: [
        {
          required: true,
          message: "Wpisz ilość par"
        }
      ]
    })(
      <Select
        showSearch
        placeholder="Wybierz ilość par"
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

export default CouplesInput;
