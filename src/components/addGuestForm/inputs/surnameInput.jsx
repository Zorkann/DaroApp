import React, { Component } from "react";
import { Form, Input } from "antd";

class SurnameInput extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
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
    );
  }
}

export default SurnameInput;
