import React from "react";
import { Form } from "antd";

const FormInput = ({ label, name, message, children}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        { required: true, message: { message } },
      ]}
    >
      {children}
    </Form.Item>
  );
};

export default FormInput;
