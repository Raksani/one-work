import React from 'react';
import { Form } from "antd";

const ValidatePassword = ({ label, name, message, children}) => {
    return (
      <Form.Item
        label={label}
        name={name}
        rules={[
            { required: true, message: {message} },
            { min: 12, message: `Password must be minimum 12 characters.` },
            { max: 128, message: `Password must be maximum 128 characters.` }
        ]}
      >
        {children}
      </Form.Item>
    );
  };

export default ValidatePassword;