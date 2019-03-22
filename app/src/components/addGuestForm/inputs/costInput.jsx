import React, { Component } from "react";
import { Form, Input } from "antd";

class CostInput extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
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
    );
  }
}

export default CostInput;
