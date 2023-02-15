import { Button, Card, Col, Modal, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { triggerOrderMenu } from "../../features/commonSlice";
import { submitOrder } from "../../features/tableSlice";
import "./index.css";

const { Meta } = Card;

const OrderMenu = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const currentSelectTable = useSelector(
        (state) => state.common.currentSelectTable
    );
    const tables = useSelector((state) => state.tables.tables);
    const [order, setOrder] = useState();
    const [reload, setReload] = useState(true);
    const [currentOrder, setCurrentOrder] = useState({ total: 0, drinks: [] });
    const orderMenuVisible = useSelector(
        (state) => state.common.orderMenuVisible
    );

    const hideOrderMenu = () => {
        dispatch(triggerOrderMenu());
        let neworder = menu.drinks.map((item) => ({
            ...item,
            quantity: 0,
        }));
        setOrder(neworder);
        setCurrentOrder({ total: 0, drinks: [] });
    };

    const selectDrink = (drink) => {
        let orderCounting = currentOrder;
        orderCounting.total += drink.price;
        orderCounting.drinks.push({ name: drink.title, price: drink.price });
        setCurrentOrder(orderCounting);
        let newOrder = order;
        newOrder.map((item) => item.title === drink.title && item.quantity++);
        setOrder(newOrder);
        setReload(!reload);
    };

    const onSubmit = () => {
        currentOrder.total !== 0 &&
            dispatch(
                submitOrder({ id: currentSelectTable, order: currentOrder })
            );
        hideOrderMenu();
    };

    useEffect(() => {
        if (menu.drinks) {
            let neworder = menu.drinks.map((item) => ({
                ...item,
                quantity: 0,
            }));
            setOrder(neworder);
        }
    }, [menu.drinks]);

    useEffect(() => {
        if (orderMenuVisible) {
            let currentTable = tables.find(
                (item) => item._id === currentSelectTable
            );
            setCurrentOrder(currentTable.order);
        }
    }, [currentSelectTable, orderMenuVisible, tables]);

    return (
        <>
            {reload}
            <Modal
                title="DRINK MENU"
                open={orderMenuVisible}
                width={800}
                style={{
                    top: "20px",
                }}
                footer={
                    <>
                        <Space size="middle">
                            <Button type="primary" onClick={onSubmit}>
                                Submit
                            </Button>
                            <Button>Cancel</Button>
                        </Space>
                    </>
                }
                onCancel={hideOrderMenu}
                maskClosable={false}
            >
                <div
                    style={{
                        maxHeight: "500px",
                        padding: "10px",
                        overflowY: "scroll",
                        overflowX: "hidden",
                    }}
                >
                    <Row gutter={[8, 8]}>
                        {order &&
                            order.map((item) => (
                                <Col span={6} key={item.title}>
                                    <Card
                                        hoverable
                                        className="card_container"
                                        style={{}}
                                        cover={
                                            <img
                                                alt="example"
                                                style={{ height: "180px" }}
                                                src={`http://localhost:5000/${item.image.data}`}
                                            />
                                        }
                                        onClick={() => selectDrink(item)}
                                    >
                                        <div>
                                            <Meta
                                                title={`${item.title}`}
                                                description={`${item.price}`}
                                            />
                                            <div>
                                                <p>{item.quantity}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
            </Modal>
        </>
    );
};

export default OrderMenu;
