import { Button, Popconfirm, Popover, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { triggerOrderMenu } from "../features/commonSlice";
import { clearTable } from "../features/tableSlice";

const Table = ({ _id, order, tableNumber, numberOfSit, empty }) => {
    const dispatch = useDispatch();
    const openOrderMenu = () => {
        dispatch(triggerOrderMenu(_id));
    };
    const clearTableDrinks = () => {
        dispatch(clearTable(_id));
    };
    const tableDrinks = (
        <div key={_id}>
            <p>Total : {order.total}</p>
            {order.drinks &&
                order.drinks.map((item) => (
                    <p key={item.name}>
                        {item.name} - {item.price}
                    </p>
                ))}
        </div>
    );

    return (
        <div
            style={{
                border: "1px solid black",
                borderRadius: "15px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p>Table : {tableNumber}</p>
            <p>Number of sits : {numberOfSit}</p>
            <p>status : {empty ? "empty" : "currently use"}</p>
            <Space>
                <Popover content={tableDrinks} title="Current order">
                    <Button>Detail</Button>
                </Popover>
                <Button type="primary" onClick={openOrderMenu}>
                    Order
                </Button>
                <Popconfirm
                    title="clear table"
                    okText="OK"
                    cancelText="Cancel"
                    onConfirm={clearTableDrinks}
                >
                    <Button danger>Clear table</Button>
                </Popconfirm>
            </Space>
        </div>
    );
};

export default Table;
