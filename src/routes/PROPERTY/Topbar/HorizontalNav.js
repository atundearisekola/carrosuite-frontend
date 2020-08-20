import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
//import IntlMessages from '../util/IntlMessages';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = (props) => {
  const getNavStyleSubMenuClass = () => {
    return 'gx-menu-horizontal';
  };

  const selectedKeys = props.state.pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <SubMenu
        popupClassName={getNavStyleSubMenuClass()}
        key="main"
        title="Main"
      >
        <SubMenu
          popupClassName="gx-menu-horizontal"
          key="navigation"
          title={
            <span>
              <i className="icon icon-navigation" />
              Navigation
            </span>
          }
        >
          <Menu.Item key="components/navigation/affix">
            <Link to="/components/navigation/affix">Item Link</Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/breadcrumb">
            <Link to="/components/navigation/breadcrumb">Item Link</Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/dropdown">
            <Link to="/components/navigation/dropdown">Item Link</Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/menu">
            <Link to="/components/navigation/menu">Item Link</Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/pagination">
            <Link to="/components/navigation/pagination">Item Link</Link>
          </Menu.Item>
          <Menu.Item key="components/navigation/steps">
            <Link to="/components/navigation/steps">Item Link</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          popupClassName="gx-menu-horizontal"
          key="extra-elements"
          title={
            <span>
              <i className="icon icon-ellipse-h" />
              Property
            </span>
          }
        >
          <Menu.Item key="custom-views/extras/pricing-table">
            <Link to="/custom-views/extras/pricing-table">Item Link</Link>
          </Menu.Item>

          <Menu.Item key="custom-views/extras/callouts">
            <Link to="/custom-views/extras/callouts">Item Link</Link>
          </Menu.Item>
          <Menu.Item key="custom-views/extras/testimonials">
            <Link to="/custom-views/extras/testimonials">Item Link</Link>
          </Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;
