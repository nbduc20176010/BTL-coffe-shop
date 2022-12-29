import { Breadcrumb, Col, Row } from "antd";
import React from "react";
import OrderMenu from "../../components/OrderMenu";
import Table from "../../components/Table";


const Home = () => {
    const tables = [
        {
            number: 1,
            status: "active",
        },
        {
            number: 2,
            status: "active",
        },
        {
            number: 3,
            status: "active",
        },
        {
            number: 4,
            status: "active",
        },
        {
            number: 5,
            status: "active",
        },
        {
            number: 6,
            status: "active",
        },
        {
            number: 7,
            status: "active",
        },
        {
            number: 8,
            status: "active",
        },
    ];
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Tables</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ margin: "50px" }}>
                <Row gutter={[32, 32]}>
                    {tables.map((item) => (
                        <Col span={8} key={`${item.number} + "col"`}>
                            <Table key={`${item.number} + "table"`} {...item} />
                        </Col>
                    ))}
                </Row>
            </div>
            <OrderMenu />
        </>
    );
};

export default Home;
