import React from "react";
import {Layout} from "antd";
// import { Icon } from "antd";
// import { Link } from "react-router-dom";
// const { SubMenu } = Menu;
const { Sider } = Layout;
const Sidebar = props => {
  const { type = "dark", collapsible = false, collapsed = false } = props;
  return (
    <Layout>
      <Sider
        className={` sider-${type}`}
        trigger={null}
        collapsible={collapsible}
        collapsedWidth="0"
        breakpoint="md"
        onBreakpoint={broken => {}}
        collapsed={collapsed}
        onCollapse={(collapsed, type) => {}}
        type="primary"
      >
        {props.content}
      </Sider>
    </Layout>
  );
};

export default Sidebar;
