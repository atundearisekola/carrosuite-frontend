import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SidebarLogo = (props) => {
  let drawerStyle = 'gx-collapsed-sidebar';
  const TAB_SIZE = 992;

  return (
    <div className="gx-layout-sider-header">
      <div className="gx-linebar">
        <i
          className={`gx-icon-btn icon icon-menu-unfold gx-text-white`}
          onClick={() => {
            props.toggleCollapsedSideNav();
          }}
        />
      </div>

      <Link to="/" className="gx-site-logo">
        {props.state.width >= TAB_SIZE ? (
          <img alt="lo" src="" />
        ) : (
          <img alt="logo1" src="" />
        )}
      </Link>
    </div>
  );
};

export default SidebarLogo;
