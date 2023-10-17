// src/App.tsx
import React from "react";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="dark">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Users</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Content goes here
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Admin Dashboard ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
