import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={[{ key: "home", label: <Link to="/">Home</Link> }]}
            />
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
