import { Button, Form, Input, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStoreInfor, login, resetAuth } from "../../features/storeSlice";
import "./index.css";

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = (values) => {
        dispatch(login(values));
    };
    const authStatus = useSelector((state) => state.store.status);
    const authMessage = useSelector((state) => state.store.authMessage);

    useEffect(() => {
        if (authStatus === "finish") {
            let storeid = localStorage.getItem("store");
            navigate("/");
            dispatch(resetAuth());
            dispatch(getStoreInfor(storeid));
        }
    }, [authStatus, authMessage, navigate, dispatch]);

    return (
        <>
            <div className="login_page">
                <div className="login_form_container">
                    <h1>Login</h1>
                    <Form
                        name="Login form"
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 13 }}
                        form={form}
                        onFinish={handleLogin}
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
                                <Button type="primary" htmlType="submit">
                                    Login
                                </Button>
                                <Button>Cancel</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;
