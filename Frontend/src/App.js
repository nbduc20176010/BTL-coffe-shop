import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderMenu from "./components/OrderMenu/OrderMenu";
import Home from "./scenes/Home/Home";
import Login from "./scenes/Login/Login";
import Missing from "./scenes/Missing";

const { Header, Content } = Layout;
function App() {
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
