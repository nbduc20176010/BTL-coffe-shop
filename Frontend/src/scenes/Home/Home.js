import { Breadcrumb, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderMenu from "../../components/OrderMenu/OrderMenu";
import Table from "../../components/Table";
import { getMenu } from "../../features/menuSlice";
import { getStoreTables } from "../../features/tableSlice";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.store.username);
    const tables = useSelector((state) => state.tables.tables);

    useEffect(() => {
        if (user) {
            let storeId = localStorage.getItem("store");
            dispatch(getStoreTables(storeId));
            dispatch(getMenu());
        }
    }, [user, dispatch]);

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Tables</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: "50px" }}>
                <Row gutter={[32, 32]}>
                    {!tables ? (
                        <div>please login</div>
                    ) : (
                        tables.map((item) => (
                            <Col span={8} key={`${item.tableNumber} + "col"`}>
                                <Table
                                    key={`${item.tableNumber} + "table"`}
                                    {...item}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </div>
            <OrderMenu />
        </>
    );
};

export default Home;
