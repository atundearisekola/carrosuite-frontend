import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import CustomScrollbars from '../util/CustomScrollbars';
import SidebarLogo from './SidebarLogo';
import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';

//import IntlMessages from '../util/IntlMessages';
import { useSelector } from 'react-redux';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = (props) => {
  const getNoHeaderClass = () => {
    return 'gx-no-header-notifications';
  };
  const getNavStyleSubMenuClass = () => {
    return 'gx-no-header-submenu-popup';
  };
  const selectedKeys = props.state.pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo {...props} />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass()}`}>
          <UserProfile {...props} />
          <AppsNavigation {...props} />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme="lite"
            mode="inline"
          >
            <MenuItemGroup key="main" className="gx-menu-group" title="Main">
              <SubMenu
                key="dashboard"
                popupClassName={getNavStyleSubMenuClass()}
                title={
                  <span>
                    {' '}
                    <i className="icon icon-dasbhoard" />
                    <span>dasbhoard</span>
                  </span>
                }
              >
                <Menu.Item key="main/dashboard/crypto">
                  <Link to="/main/dashboard/crypto">
                    <i className="icon icon-crypto" />
                    <span>Add Property</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/crm">
                  <Link to="/main/dashboard/crm">
                    <i className="icon icon-crm" />
                    <span>Property Item Link</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="main/dashboard/listing">
                  <Link to="/main/dashboard/listing">
                    <i className="icon icon-listing-dbrd" />
                    <span>Property Item Link</span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="main/widgets">
                <Link to="/main/widgets">
                  <i className="icon icon-widgets" />
                  <span>Property Item Link</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="main/metrics">
                <Link to="/main/metrics">
                  <i className="icon icon-apps" />
                  <span>Property Item Link</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="main/layouts">
                <Link to="/main/layouts">
                  <i className="icon icon-card" />
                  <span> Property Item Link</span>
                </Link>
              </Menu.Item>
            </MenuItemGroup>

            <MenuItemGroup
              key="documents"
              className="gx-menu-group"
              title="Document"
            >
              <Menu.Item key="documents/changelog">
                <Link to="/documents/changelog">
                  <i className="icon icon-timeline-new" />
                  <span>Property Item Link</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="documents/installation">
                <Link to="/documents/installation">
                  <i className="icon icon-steps" />
                  <span>Property Item Link</span>
                </Link>
              </Menu.Item>
            </MenuItemGroup>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
