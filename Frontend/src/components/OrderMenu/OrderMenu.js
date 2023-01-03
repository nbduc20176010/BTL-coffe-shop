import { Button, Card, Col, Modal, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { triggerOrderMenu } from "../../features/commonSlice";
import "./index.css";

const { Meta } = Card;

const OrderMenu = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const [order, setOrder] = useState();
    const [reload, setReload] = useState(true);
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
    };
    const selectDrink = (drink) => {
        let newOrder = order;
        newOrder.map((item) => item.name === drink.name && item.quantity++);
        setOrder(newOrder);
        setReload(!reload);
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
                            <Button type="primary">Submit</Button>
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
                                <Col span={6} key={item.key}>
                                    <Card
                                        hoverable
                                        className="card_container"
                                        cover={
                                            <img alt="example" src={item.img} />
                                        }
                                        onClick={() => selectDrink(item)}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Meta
                                                title={`${item.name}`}
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
