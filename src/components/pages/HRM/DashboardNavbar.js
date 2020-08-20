import React  from "react";
import { Menu, Button } from "antd";
import {
  UserOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  ExclamationOutlined, 
  FileAddFilled,
  SafetyOutlined,
  AccountBookFilled,
  WalletOutlined,
  DollarOutlined,
  FormOutlined
} from  '@ant-design/icons'
import { Link, Redirect } from "react-router-dom";


const { SubMenu } = Menu;

const DashboardNavbar = props => {
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
        defaultSelectedKeys={[`/app/hrm/${props.match.params.page}`]}
        theme="dark"
      >
        <Menu.Item className="menu-item" key="/app/hrm/dashboard">
          <Link to="/app/hrm/dashboard">
            <UserOutlined className="icon"/>
            <span className="menu-text">Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="/app/hrm/add-staff">
          <Link to="/app/hrm/add-staff">
            <PlusOutlined className="icon" />
            <span>Add Staff</span>{" "}
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="/app/hrm/people">
          <Link to="/app/hrm/people">
            {" "}
            <UnorderedListOutlined className="icon"/>
            <span>People</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="/app/hrm/policies">
          <Link to="/app/hrm/policies">
            <FileAddFilled className="icon"/>
            <span>Documents</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="5">
          <Link to="/app/hrm/queries">
            <ExclamationOutlined className="icon"/>
            <span>Queries</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="applications">
          <Link to="/app/hrm/appications">
            <FileAddFilled className="icon"/>
            <span>Applications</span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-item" key="6">
          <Link to="/app/hrm/loan">
            <UnorderedListOutlined className="icon"/>
            <span>Staff Loan</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="9">
          <SafetyOutlined className="icon"/>
          <span>Password Pouch</span>
        </Menu.Item>
        <SubMenu
          className="menu-item"
          key="sub1"
          title={
            <span>
              <AccountBookFilled className="icon"/>
              <span>Payroll</span>
            </span>
          }
        >
          <Menu.Item className="sub-menu-item menu-item" key="10">
            <WalletOutlined className="icon"/>
            Payroll
          </Menu.Item>
          <Menu.Item className="sub-menu-item menu-item" key="11">
            <PlusOutlined className="icon"/> Add Payroll
          </Menu.Item>
          <Menu.Item className="sub-menu-item menu-item" key="12">
            <UnorderedListOutlined className="icon"/> Payroll Items
          </Menu.Item>
          <Menu.Item className="sub-menu-item menu-item" key="13">
            <DollarOutlined className="icon"/> Staff Wages
          </Menu.Item>
          <Menu.Item className="sub-menu-item menu-item" key="14">
            <FormOutlined className="icon"/> Salary Structure
          </Menu.Item>
        </SubMenu>
        <SubMenu
          className="menu-item"
          key="sub2"
          title={
            <span>
              <AccountBookFilled className="icon"/>
              <span>Leave</span>
            </span>
          }
        >
          <Menu.Item className="sub-menu-item menu-item" key="15">
            <WalletOutlined className="icon"/>
            Leave Policy
          </Menu.Item>
          <Menu.Item className="sub-menu-item menu-item" key="16">
            <PlusOutlined className="icon"/> Leave Plan
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default DashboardNavbar;


