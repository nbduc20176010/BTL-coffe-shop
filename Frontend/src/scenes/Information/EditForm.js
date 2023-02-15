import { Button, Form, Input, InputNumber, Modal, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { triggerEditMenu } from "../../features/commonSlice";
import { addDrink, editDrink } from "../../features/menuSlice";
import { clearDrink } from "../../features/storeSlice";

const layout = {
    labelCol: { offset: 0, span: 7 },
    wrapperCol: { span: 17 },
};

const Add = () => {
    const ref = useRef();
    const [uploadImage, setUploadImage] = useState({});
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const drink = useSelector((state) => state.store.selectedDrink);
    const editMenuVisible = useSelector(
        (state) => state.common.editMenuVisible
    );

    const uploadingImage = (event) => {
        event.target.files[0] && setUploadImage(event.target.files[0]);
    };

    const hideMenu = () => {
        dispatch(triggerEditMenu());
        dispatch(clearDrink());
        form.resetFields();
        ref.current.value = "";
    };

    const submitMenu = (values) => {
        let formData = new FormData();
        formData.append("image", uploadImage);
        Object.keys(values).forEach((key) => {
            if (typeof values[key] !== "object")
                formData.append(key, values[key]);
            else formData.append(key, JSON.stringify(values[key]));
        });
        if (drink._id) {
            dispatch(editDrink({ _id: drink._id, drink: formData }));
        } else {
            dispatch(addDrink(formData));
        }
        hideMenu();
    };

    useEffect(() => {
        editMenuVisible && form.setFieldsValue(drink);
    }, [editMenuVisible, drink, form]);

    return (
        <>
            <Modal
                title="Drink manage menu"
                open={editMenuVisible}
                onCancel={hideMenu}
                maskClosable={false}
                width={450}
                footer={null}
            >
                <Form
                    form={form}
                    {...layout}
                    labelAlign="left"
                    onFinish={submitMenu}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Title can not be empty",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Image">
                        <Space size="small" direction="vertical">
                            <input
                                multiple={false}
                                type="file"
                                ref={ref}
                                onChange={uploadingImage}
                            />
                            {drink.image && (
                                <img
                                    style={{
                                        width: "100px",
                                    }}
                                    alt={`${drink.title}`}
                                    src={`http://localhost:5000/${drink.image.data}`}
                                />
                            )}
                        </Space>
                    </Form.Item>
                    <Form.Item label="Price" name="price">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item>
                        <Space size="middle">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button onClick={hideMenu}>Cancel</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Add;
