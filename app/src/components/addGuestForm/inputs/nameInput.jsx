import React, { Component } from "react";
import { Form, Input } from "antd";

class NameInput extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
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
    );
  }
}

export default NameInput;
