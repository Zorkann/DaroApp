import React, { Component, Fragment } from "react";
import { Form, Row, Button } from "antd";
import NameInput from "./inputs/nameInput";
import SurnameInput from "./inputs/surnameInput";
import HallNumberInput from "./inputs/hallNumberInput";
import TableNumberInput from "./inputs/tableNumberInput";
import CostInput from "./inputs/costInput";
import CouplesInput from "./inputs/couplesInput";
import styles from "./form.module.css";

class GuestForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <h1 className={styles.formTitle}>Dodaj nowego gościa</h1>
        <div className={styles.formContainer}>
          <Form onSubmit={this.handleSubmit}>
            <Row className={styles.form}>
              <NameInput getFieldDecorator={getFieldDecorator} />
              <SurnameInput getFieldDecorator={getFieldDecorator} />
              <HallNumberInput getFieldDecorator={getFieldDecorator} />
              <TableNumberInput getFieldDecorator={getFieldDecorator} />
              <CostInput getFieldDecorator={getFieldDecorator} />
              <CouplesInput getFieldDecorator={getFieldDecorator} />
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitButton}
              >
                Log in
              </Button>
            </Row>
          </Form>
        </div>
      </Fragment>
    );
  }
}

export default Form.create({ name: "addGuest" })(GuestForm);
