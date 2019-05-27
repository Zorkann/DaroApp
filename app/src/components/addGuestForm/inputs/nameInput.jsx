import React from "react";
import { Form, Input } from "antd";

const NameInput = ({ getFieldDecorator }) => (
  <Form.Item label="Imię">
    {getFieldDecorator("name", {
      rules: [
        {
          required: true,
          message: "Wpisz imię"
        }
      ]
    })(<Input />)}
  </Form.Item>
)


export default NameInput;
