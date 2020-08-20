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
              <Link to={`${match.url}/add-property`}>
                <UserOutlined className="icon icon-widgets" />
                <span>Add Property</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/app/hrm/people">
              <Link to={`${match.url}/list-property`}>
                <UsergroupAddOutlined className="icon icon-widgets" />
                <span>List Property</span>
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
