import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
import { useSelector } from "react-redux";
const { Content } = Layout;

const styles = {
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  h1: {
    backgroundColor: "#f77749",
    color: "red",
    padding: "10px",
  },
};

const Container = ({ sidebar = "", children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { error } = useSelector((state) => state.logistics);
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
                  marginBottom: "10rem",
                }
              : {
                  background: "#fff",
                  width: "80%",
                  minHeight: "100%",

                  padding: "1rem",
                  marginBottom: "10rem",
                }
          }
        >
          <div style={styles.div}>
            {error ? <h4 style={styles.h1}>{error}</h4> : null}
          </div>

          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default Container;
