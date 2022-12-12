import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { triggerOrderMenu } from "../features/commonSlice";

const OrderMenu = () => {
    const dispatch = useDispatch();
    const orderMenuVisible = useSelector(
        (state) => state.common.orderMenuVisible
    );
    const hideOrderMenu = () => {
        dispatch(triggerOrderMenu());
    };
    return (
        <>
            <Modal
                open={orderMenuVisible}
                footer={null}
                onCancel={hideOrderMenu}
                maskClosable={false}
            >
                <p>Somethings .....</p>
                <p>Somethings .....</p>
                <p>Somethings .....</p>
                <p>Somethings .....</p>
            </Modal>
        </>
    );
};

export default OrderMenu;
