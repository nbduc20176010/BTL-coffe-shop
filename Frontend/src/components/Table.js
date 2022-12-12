import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { triggerOrderMenu } from "../features/commonSlice";

const Table = ({ number, status }) => {
    const dispatch = useDispatch();
    const openOrderMenu = () => {
        dispatch(triggerOrderMenu());
    };
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
            <p>Table : {number}</p>
            <p>status : {status}</p>
            <Button type="primary" onClick={openOrderMenu}>
                Order
            </Button>
        </div>
    );
};

export default Table;
