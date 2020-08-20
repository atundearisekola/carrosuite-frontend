import React from "react";
import { Menu, Button } from "antd";
import "./dashboardSideBarNav.css";
import {
  UserOutlined,
  SettingFilled,
  CarFilled,
  UsergroupAddOutlined,
  GiftFilled,
  HddFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const DashboardSideBarNav = (props) => {
  return (
    <div>
      <div className="logo" />
      <div style={{ height: "40px" }} className="text-primary">
        Home
      </div>
      {!props.collapsed && (
        <Button className="btn btn-primary sm">Switch Company</Button>
      )}
      <Menu
        mode="inline"
        className="menu"
        defaultSelectedKeys={[`/app/logistics/${props.match.params.page}`]}
        theme="dark"
      >
        <Menu.Item className="menu-item" key="/app/logistics/dashboard">
          <Link to="/app/logistics/dashboard">
            <UserOutlined className="icon" />
            <span className="menu-text">Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="/app/logistics/orders">
          <Link to="/app/logistics/orders">
            <GiftFilled className="icon" />
            <span>Orders</span>{" "}
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="/app/logistics/customers">
          <Link to="/app/logistics/customers">
            {" "}
            <UsergroupAddOutlined className="icon" />
            <span>Customers</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="/app/logistics/dispatch">
          <Link to="/app/logistics/dispatch">
            <CarFilled className="icon" />
            <span>Dispatch</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="/app/logistics/assets">
          <Link to="/app/logistics/assets">
            <HddFilled className="icon" />
            <span>Assets</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="/app/logistics/create">
          <Link to="/app/logistics/create">
            <HddFilled className="icon" />
            <span>Create Assets</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="applications">
          <Link to="/app/logistics/settings">
            <SettingFilled className="icon" />
            <span>Settings</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DashboardSideBarNav;
