import { Breadcrumb, Col, Row } from "antd";
import React from "react";
import OrderMenu from "../../components/OrderMenu/OrderMenu";
import Table from "../../components/Table";


const Home = () => {
    const tables = [
        {
            number: 1,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 2,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 3,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 4,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 5,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 6,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 7,
            numOfSits: 4,
            status: "empty",
            order: []
        },
        {
            number: 8,
            numOfSits: 4,
            status: "empty",
            order: []
        },
    ];
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Tables</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: "50px" }}>
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
