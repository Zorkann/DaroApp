import React from "react";
import { Form, Input } from "antd";

const SurnameInput = ({ getFieldDecorator }) => (
  <Form.Item label="Nazwisko">
    {getFieldDecorator("surname", {
      rules: [
        {
          required: true,
          message: "Wpisz nazwisko"
        }
      ]
    })(<Input />)}
  </Form.Item>
)

export default SurnameInput;
