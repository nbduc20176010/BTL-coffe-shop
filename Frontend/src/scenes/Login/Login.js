import { Button, Form, Input, Space } from "antd";
import React from "react";
import "./index.css";

const Login = () => {
    return (
        <div className="login_page">
            <div className="login_form_container">
                <h1>Login</h1>
                <Form
                    name="Login form"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 13 }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space size="middle">
                            <Button type="primary">Login</Button>
                            <Button>Cancel</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
