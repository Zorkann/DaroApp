import React, { Fragment } from "react";
import { Form, Row, Button } from "antd";
import NameInput from "./inputs/nameInput";
import SurnameInput from "./inputs/surnameInput";
import HallNumberInput from "./inputs/hallNumberInput";
import TableNumberInput from "./inputs/tableNumberInput";
import CostInput from "./inputs/costInput";
import CouplesInput from "./inputs/couplesInput";
import styles from "./form.module.css";

const formInputs = [
  NameInput,
  SurnameInput,
  HallNumberInput,
  TableNumberInput,
  CostInput,
  CouplesInput
]

const GuestForm = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      const { name, surname, hallNumber, tableNumber, cost } = values
      if (!err) {
        const newUser = {
          name,
          surname,
          hallNumber,
          tableNumber,
          cost,
          // couples
        }
        fetch('http://127.0.0.1:8082/addUser', {
          method: 'post',
          body: JSON.stringify({ newUser }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log("Received values of form: ", values);
      }
    });
  };

  const renderFormInputs = formInputs.map((Input, i) => (
    <Input key={i} getFieldDecorator={getFieldDecorator} />)
  )

  return (
    <Fragment>
      <h1 className={styles.formTitle}>Dodaj nowego gościa</h1>
      <div className={styles.formContainer}>
        <Form onSubmit={handleSubmit}>
          <Row className={styles.form}>
            {renderFormInputs}
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
  )
}

export default Form.create({ name: "addGuest" })(GuestForm);
