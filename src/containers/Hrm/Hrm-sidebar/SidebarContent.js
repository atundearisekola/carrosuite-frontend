import React from "react";
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
  FormOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from "../../../constants/ThemeSetting";
import IntlMessages from "../../../util/IntlMessages";
import { useSelector } from "react-redux";
const { SubMenu } = Menu;

const SidebarContent = () => {
  const match = useRouteMatch();
  console.log("MATCH FROM NAVBAR", match);
  let { navStyle, themeType, pathname } = useSelector(
    ({ settings }) => settings
  );

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <Menu.Item key="/app/hrm">
              <Link to={`${match.url}`}>
                <i className="icon icon-widgets" />
                <span>
                  <IntlMessages id="Dashboard" />
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="sample">
              <Link to={`${match.url}/add-staff`}>
                <UserOutlined className="icon icon-widgets" />
                <span>Add Staff</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/app/hrm/people">
              <Link to={`${match.url}/people`}>
                <UsergroupAddOutlined className="icon icon-widgets" />
                <span>People</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="menu-item" key="/app/hrm/policies">
              <Link to={`${match.url}/policies`}>
                <FileAddFilled className="icon icon-widgets" />
                <span>Documents</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="5">
              <Link to={`${match.url}/queries`}>
                <ExclamationOutlined className="icon icon-widgets" />
                <span>Queries</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="applications">
              <Link to={`${match.url}/appications`}>
                <FileAddFilled className="icon icon-widgets" />
                <span>Applications</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="6">
              <Link to={`${match.url}/loan`}>
                <UnorderedListOutlined className="icon icon-widgets" />
                <span>Staff Loan</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="menu-item" key="9">
              <Link to={`${match.url}/password-pouch`}>
                <SafetyOutlined className="icon icon-widgets" />
                <span>Password Pouch</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="sub-menu-item menu-item" key="10">
              <Link to={`${match.url}/payroll`}>
                <WalletOutlined className="icon icon-widgets" />
                <span>Payroll</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="sub-menu-item menu-item" key="11">
              <PlusOutlined className="icon icon-widgets" /> Add Payroll
            </Menu.Item>
            <Menu.Item className="sub-menu-item menu-item" key="12">
              <Link to={`${match.url}/payroll-item/`}>
                <UnorderedListOutlined className="icon icon-widgets" /> Payroll
                Items
              </Link>
            </Menu.Item>
            <Menu.Item className="sub-menu-item menu-item" key="13">
              <DollarOutlined className="icon icon-widgets" /> Staff Wages
            </Menu.Item>
            <Menu.Item className="sub-menu-item menu-item" key="14">
              <Link to={`${match.url}/salary-structure/`}>
                <FormOutlined className="icon icon-widgets" /> Salary Structure
              </Link>
            </Menu.Item>

            <Menu.Item className="sub-menu-item menu-item" key="15">
              <Link to={`${match.url}/leave-policy`}>
                <WalletOutlined className="icon icon-widgets" />
                <span> Leave Policy</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="sub-menu-item menu-item" key="16">
              <Link to={`${match.url}/leave-plan`}>
                <WalletOutlined className="icon icon-widgets" />
                <span> Leave Plan</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="sub-menu-item menu-item" key="17">
              <Link to={`${match.url}/basic-pay`}>
                <WalletOutlined className="icon icon-widgets" />
                <span> Basic Pay</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="sub-menu-item menu-item" key="17">
              <Link to={`${match.url}/add-pay`}>
                <WalletOutlined className="icon icon-widgets" />
                <span> Add Pay</span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
