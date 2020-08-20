import React, { useEffect, useState } from 'react';
import { Drawer, Layout } from 'antd';
import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const Sidebar = (props) => {
  //const [collapsed, setCollapsed] = useState(true);

  //const [width, updateWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      props.updateWindowWidth(window.innerWidth);
    });
  });

  let drawerStyle = 'gx-collapsed-sidebar';
  const TAB_SIZE = 992;

  return (
    <Sider
      className={`gx-app-sidebar ${drawerStyle} gx-layout-sider-dark`}
      trigger={null}
      collapsed={props.state.width < TAB_SIZE ? false : true}
      theme="lite"
      collapsible
    >
      {props.state.width < TAB_SIZE || props.state.navCollapsed ? (
        <Drawer
          className={`gx-drawer-sidebar gx-drawer-sidebar-dark`}
          placement="left"
          closable={false}
          onClose={() =>
            props.toggleCollapsedSideNav(!props.state.navCollapsed)
          }
          visible={props.state.navCollapsed}
        >
          <SidebarContent {...props} />
        </Drawer>
      ) : (
        <SidebarContent {...props} />
      )}
    </Sider>
  );
};
export default Sidebar;
