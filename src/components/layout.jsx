import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import NotFoundPage from './404'
import Breadcrumb from "./Breadcrumb";
import { useState } from "react";
import Menu from "./menu";
const { Header, Sider, Content } = Layout;
import { BrowserRouter, Route, Routes, useLocation,Link } from "react-router-dom";
import Home from "../pages/home";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const BreadcrumbItems=[
    {
      title:<Link to='/' >Home</Link>
    }
  ]
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const styles = {
    Layout: {
      height: "100vh",
    },
    Content: {
      margin: "24px 16px",
      padding: 24,
      minHeight: 280,
      background: colorBgContainer,
    },
    Button: {
      fontSize: "16px",
      width: 64,
      height: 64,
    },
    Header: {
      padding: 0,
      background: colorBgContainer,
      display:'flex',
      alignItems:'center',
    },
  };
  return (
    <BrowserRouter>
    
      <Layout style={styles.Layout}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu />
        </Sider>
        <Layout>
          <Header style={styles.Header}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={styles.Button}
            />
            <Breadcrumb/>
          </Header>

          <Content style={styles.Content}>
            <Routes>
         
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<div>About</div>} />
              <Route path="/dashboard" element={<div>Dashboard</div>} />
              <Route path="*" element={<NotFoundPage/>} />

            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
