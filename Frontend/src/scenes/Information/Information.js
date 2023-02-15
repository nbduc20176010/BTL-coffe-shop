import {
    Button,
    Descriptions,
    Form,
    InputNumber,
    Modal,
    Popconfirm,
    Space,
    Table,
    Typography,
    Input,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrinkDetail, getStoreInfor } from "../../features/storeSlice";
import { PlusCircleOutlined } from "@ant-design/icons";
import EditForm from "./EditForm";
import { triggerEditMenu } from "../../features/commonSlice";
import { deleteDrink } from "../../features/menuSlice";
import { addTable, deleteTable } from "../../features/tableSlice";

const { Title, Paragraph } = Typography;

const layout = {
    labelCol: { offset: 0, span: 8 },
    wrapperCol: { span: 14 },
};

const Information = () => {
    const [tableMenuVisible, setTableMenuVisible] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const storeInfo = useSelector((state) => state.store);
    const tables = useSelector((state) => state.tables.tables);
    const menu = useSelector((state) => state.menu.drinks);

    const openEditDrink = (id) => {
        dispatch(getDrinkDetail(id));
        dispatch(triggerEditMenu());
    };

    const tableColumns = [
        { title: "Table no.", dataIndex: "tableNumber", key: "tableNumber" },
        {
            title: "Number of sits",
            dataIndex: "numberOfSit",
            key: "numberOfSit",
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Popconfirm
                    title="Delete the drink"
                    description="Are you sure to delete this drink?"
                    onConfirm={() => dispatch(deleteTable(record._id))}
                >
                    <Button danger style={{ border: "none" }}>
                        Delete
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    const drinkColumns = [
        { title: "Title", dataIndex: "title", key: "title" },
        { title: "Description", dataIndex: "description", key: "description" },
        { title: "Price", dataIndex: "price", key: "price" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Space size="small">
                    <Button
                        onClick={() => openEditDrink(record._id)}
                        style={{ border: "none" }}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete the drink"
                        description="Are you sure to delete this drink?"
                        onConfirm={() => dispatch(deleteDrink(record._id))}
                    >
                        <Button danger style={{ border: "none" }}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const submitAddTable = (values) => {
        dispatch(addTable({ ...values, storeId: localStorage.getItem('store') }));
        setTableMenuVisible(false);
    };

    useEffect(() => {
        dispatch(getStoreInfor(localStorage.getItem("store")));
    }, [dispatch]);

    return (
        <>
            <div>
                <Typography>
                    <Title style={{ textAlign: "center" }}>Store manage</Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus non nunc mollis dolor iaculis sodales. Aenean
                        aliquet condimentum arcu quis tincidunt. Morbi tempus
                        bibendum nibh sed convallis. Phasellus non luctus enim.
                        Phasellus venenatis, velit id commodo posuere, ante
                        libero ultricies elit, at porta turpis ipsum et risus.
                        Proin efficitur, lectus at pharetra varius, dui quam
                        vehicula enim, nec lobortis felis tellus eu ipsum.
                        Integer interdum tristique velit, non tempor mi porta
                        vitae. Nunc quis dolor volutpat, efficitur nunc et,
                        tempor lorem. Sed tempor risus sit amet velit facilisis,
                        quis scelerisque est porttitor. Maecenas interdum
                        volutpat leo, ornare volutpat mi gravida hendrerit.
                        Phasellus nec convallis augue
                    </Paragraph>
                </Typography>
                <Descriptions title={storeInfo.storeName} bordered>
                    <Descriptions.Item label="Store status">
                        {storeInfo.open ? "Open" : "Close"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Number of table">
                        {storeInfo.numberOfTable}
                    </Descriptions.Item>
                    <Descriptions.Item label="Store income">
                        {storeInfo.income} VND
                    </Descriptions.Item>
                </Descriptions>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            margin: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            alignItems: "flex-end",
                        }}
                    >
                        <Button
                            type="primary"
                            style={{ botder: "none", width: "110px" }}
                            onClick={() => setTableMenuVisible(true)}
                        >
                            <PlusCircleOutlined /> Add table
                        </Button>
                        <Table
                            columns={tableColumns}
                            dataSource={tables}
                            size="small"
                            bordered
                            rowKey={(record) => record._id}
                            style={{
                                width: "550px",
                                border: "1px solid black",
                            }}
                            pagination={{ pageSize: 5 }}
                        />
                    </div>
                    <div
                        style={{
                            margin: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            alignItems: "flex-end",
                        }}
                    >
                        <Button
                            type="primary"
                            style={{ botder: "none", width: "110px" }}
                            onClick={() => dispatch(triggerEditMenu())}
                        >
                            <PlusCircleOutlined /> Add drink
                        </Button>
                        <Table
                            columns={drinkColumns}
                            dataSource={menu}
                            size="small"
                            bordered
                            rowKey={(record) => record._id}
                            style={{
                                width: "550px",
                                border: "1px solid black",
                            }}
                            pagination={{ pageSize: 5 }}
                        />
                    </div>
                </div>
            </div>
            <EditForm />
            <Modal
                title="Add table"
                open={tableMenuVisible}
                onCancel={() => setTableMenuVisible(false)}
                maskClosable={false}
                width={400}
                footer={null}
            >
                <Form
                    form={form}
                    {...layout}
                    labelAlign="left"
                    onFinish={submitAddTable}
                >
                    <Form.Item
                        label="Table number"
                        name="tableNumber"
                        rules={[
                            {
                                required: true,
                                message: "Table number can not be empty",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Number of sits"
                        name="numberOfSit"
                        rules={[
                            {
                                required: true,
                                message: "Table sits can not be empty",
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item>
                        <Space size="middle">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button onClick={() => setTableMenuVisible(false)}>
                                Cancel
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Information;
