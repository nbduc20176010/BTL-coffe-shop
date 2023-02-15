import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderMenu from "./components/OrderMenu/OrderMenu";
import { getStoreInfor } from "./features/storeSlice";
import Home from "./scenes/Home/Home";
import Information from "./scenes/Information/Information";
import Login from "./scenes/Login/Login";
import Missing from "./scenes/Missing";

const { Header, Content } = Layout;
function App() {
    const storeid = localStorage.getItem("store");
    const dispatch = useDispatch();
    useEffect(() => {
        storeid && dispatch(getStoreInfor(storeid));
    }, [dispatch, storeid]);

    const routers = [
        {
            key: "home_route",
            path: "/",
            element: <Home />,
        },
        {
            key: "login_route",
            path: "/login",
            element: <Login />,
        },
        {
            key: "information_route",
            path: "/information",
            element: <Information />,
        },
        {
            key: "missing_route",
            path: "/*",
            element: <Missing />,
        },
    ];

    return (
        <>
            <Layout
                style={{
                    minHeight: "100vh",
                }}
            >
                <Header>
                    <Navbar />
                </Header>
                <Content
                    style={{
                        padding: "10px 50px 10px",
                        position: "relative",
                    }}
                >
                    <Routes>
                        {routers.map((item) => (
                            <Route
                                key={item.key}
                                path={item.path}
                                element={item.element}
                            />
                        ))}
                    </Routes>
                </Content>
            </Layout>
            <OrderMenu />
        </>
    );
}

export default App;
