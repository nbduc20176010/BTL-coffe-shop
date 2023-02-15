import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, resetAuth } from "../features/storeSlice";
import { dropTable } from "../features/tableSlice";

const Navbar = () => {
    const user = useSelector((state) => state.store.username);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(dropTable());
        dispatch(resetAuth());
    };

    const items = [
        {
            label: <Link to="/information">information</Link>,
            key: "information",
        },
        { label: <p onClick={handleLogout}>log out</p>, key: "logout" },
    ];

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={[{ key: "home", label: <Link to="/">Home</Link> }]}
            />
            <div>
                {user !== "" ? (
                    <Dropdown
                        menu={{ items }}
                        trigger={["click"]}
                        placement="bottomRight"
                    >
                        <Button
                            style={{
                                border: "none",
                                backgroundColor: "transparent",
                                color: "#ffffff",
                            }}
                            onClick={(e) => e.preventDefault()}
                        >
                            {user}
                        </Button>
                    </Dropdown>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
