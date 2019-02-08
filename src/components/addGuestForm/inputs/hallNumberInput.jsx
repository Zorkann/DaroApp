import React, { Component } from "react";
import { Form, Select } from "antd";

const Option = Select.Option;

class HallNumberInput extends Component {
  render() {
    const { getFieldDecorator } = this.props;
    return (
      <Form.Item label="Numer sali">
        {getFieldDecorator("hallNumber", {
          rules: [
            {
              required: true,
              message: "Wpisz numer sali"
            }
          ]
        })(
          <Select
            showSearch
            placeholder="Wybierz numer sali"
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
    );
  }
}

export default HallNumberInput;
