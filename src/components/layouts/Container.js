import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
const { Content } = Layout;
const Container = ({ sidebar = "", children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="full-menu">
      <Layout>
        <Navbar toggle={toggle} collapsed={collapsed} />
        <Sidebar
          toggle={toggle}
          content={sidebar}
          collapsed={collapsed}
          type="dark"
          collapsible={true}
        />
        <Content
          className="mainContainer m-t-80"
          style={
            collapsed === true
              ? {
                  background: "#fff",
                  minWidth: "50%",
                  minHeight: "100%",
                  padding: "1rem",
                  marginLeft: "10%",
                  marginBottom: "10rem"
                }
              : {
                  background: "#fff",
                  width: "80%",
                  minHeight: "100%",

                  padding: "1rem",
                  marginBottom: "10rem"
                }
          }
        >
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default Container;
