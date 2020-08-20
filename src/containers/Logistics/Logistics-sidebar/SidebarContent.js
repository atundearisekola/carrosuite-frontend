import React from "react";
import { Menu } from "antd";
import { Link, useRouteMatch } from "react-router-dom";
import {
  UserOutlined,
  SettingFilled,
  CarFilled,
  UsergroupAddOutlined,
  GiftFilled,
  HddFilled,
} from "@ant-design/icons";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../../constants/ThemeSetting";
import IntlMessages from "../../../util/IntlMessages";
import { useSelector } from "react-redux";

const SidebarContent = () => {
  const match = useRouteMatch();

  let { navStyle, themeType, pathname } = useSelector(({ settings }) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>

      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <Menu.Item key="sample">
              <Link to={`${match.url}`}><i className="icon icon-widgets" />
                <span><IntlMessages id="Dashboard" /></span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/app/logistics/orders">
              <Link to={`${match.url}/orders`}>
                <GiftFilled className="icon icon-widgets" />
                <span>Orders</span>{" "}
              </Link>
            </Menu.Item>
            <Menu.Item className="menu-item" key="/app/logistics/customers">
              {/* to={`${match.url}/customers`}> */}
              <Link>
                <UsergroupAddOutlined className="icon icon-widgets" />
                <span>Customers</span>
              </Link>
            </Menu.Item>
            <Menu.Item className="menu-item" key="/app/logistics/dispatch">
              <Link to={`${match.url}/dispatch`}>
                <CarFilled className="icon icon-widgets" />
                <span>Dispatch</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/app/logistics/assets">
              <Link to={`${match.url}/assets`}>
                <HddFilled className="icon icon-widgets" />
                <span>Assets</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="/app/logistics/create">
              <Link to={`${match.url}/create/assets`}>
                <HddFilled className="icon icon-widgets" />
                <span>Create Assets</span>
              </Link>
            </Menu.Item>

            <Menu.Item className="menu-item" key="applications">
              <Link to={`${match.url}/settings`}>
                <SettingFilled className="icon icon-widgets" />
                <span>Settings</span>
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

