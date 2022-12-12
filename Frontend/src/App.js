import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderMenu from "./components/OrderMenu";
import Home from "./scenes/Home/Home";
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
            key: "missing_route",
            path: "/*",
            element: <Missing />,
        },
    ];

    return (
        <>
            <Layout>
                <Header>
                    <Navbar />
                </Header>
                <Content
                    style={{
                        padding: "10px 50px",
                        minHeight: "100vh",
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
