import React from 'react';

import { Input } from 'antd'
import { UserOutlined } from "@ant-design/icons";

const InputWithHeader = ({header, placeholder, icon}) => {
    return (
        <div>
            <h3>{header}</h3>
            <Input
              style={{marginBottom: '20px'}}
              className="margin-btm"
              placeholder={placeholder}
              prefix={icon && <UserOutlined />}
            />
        </div>
    );
};

export default InputWithHeader;
