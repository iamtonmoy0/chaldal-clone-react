import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const { Header, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
  minHeight: "100vh",
};
export default function Dashboard() {
  return (
    <div className="h-full">
      <Layout style={layoutStyle}>
        <Navbar />
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "calc(100vh - 64px)",
              position: "fixed",
              left: 0,
              top: 64,
              bottom: 0,
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={items}
            />
          </Sider>
          {/* dynamic render space */}
          <Outlet />
        </Layout>
      </Layout>
    </div>
  );
}
