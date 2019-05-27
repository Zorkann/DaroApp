import React from "react";
import { Form, Input } from "antd";

const CostInput = ({ getFieldDecorator }) => (
  <Form.Item label="Zapłacona kwota">
    {getFieldDecorator("cost", {
      rules: [
        {
          required: true,
          message: "Wpisz zapłaconą kwotę"
        }
      ]
    })(<Input />)}
  </Form.Item>
)

export default CostInput;
