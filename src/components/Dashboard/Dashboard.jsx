import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const { Content, Sider } = Layout;

const items = [
  "Offers32",
  "Egg Club",
  "Deal of the Day",
  "Favourites",
  "Summer Collection",
  "Flash Sales",
  "Popular",
  "Food",
  "Cleaning Supplies",
  "Personal Care",
  "Health & Wellness",
  "Baby Care",
  "Home & Kitchen",
  "Stationery & Office",
  "Pet Care",
  "Toys & Sports",
  "Beauty & MakeUp",
  "Fashion & Lifestyle",
  "Vehicle Essentials",
  "Premium Care",
  "Recipes",
].map((icon, index) => ({
  key: String(index + 1),
  // icon: React.createElement(icon),
  label: icon,
}));

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#fff",
};
const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
  minHeight: "100vh",
};

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  // const outletStyle = {
  //   marginLeft: collapsed ? 80 : 200,
  //   transition: "margin-left 0.2s",
  //   minHeight: "100vh",
  //   width: collapsed ? "calc(100% - 80px)" : "calc(100% - 200px)",
  // };
  return (
    <div className="h-full">
      <Layout style={layoutStyle}>
        <Navbar open={collapsed} setOpen={setCollapsed} />
        <Layout>
          <Sider
            collapsed={collapsed}
            breakpoint="lg"
            collapsedWidth="0"
            style={{
              overflow: "auto",
              height: "calc(100vh - 64px)",
              position: "fixed",
              left: 0,
              top: 64,
              bottom: 0,
              background: "#FFFFFF",
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu mode="inline" defaultSelectedKeys={["4"]} items={items} />
          </Sider>
          {/* dynamic render space */}
          <Content style={contentStyle}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
