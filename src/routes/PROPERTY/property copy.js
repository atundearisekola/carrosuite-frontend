import React, { Component } from 'react';
import { Layout } from 'antd';

import Sidebar from './Sidebar/index';
import HorizontalDefault from './Topbar/HorizontalDefault/index';
import Topbar from './Topbar/index';

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: false,
      width: window.innerWidth,

      locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us',
      },
      pathname: '/',
    };
  }

  render() {
    const { Content, Footer } = Layout;
    const toggleCollapsedSideNav = (navCollapsed) => {
      this.setState({
        ...this.state,
        navCollapsed: navCollapsed,
      });
    };

    const updateWindowWidth = (width) => {
      this.setState({
        ...this.state,
        width: width,
      });
    };
    return (
      <div className="ant-layout">
        <Layout className="gx-app-layout">
          <Sidebar
            {...this.props}
            state={this.state}
            toggleCollapsedSideNav={toggleCollapsedSideNav}
            updateWindowWidth={updateWindowWidth}
          />
          <Layout>
            <HorizontalDefault
              {...this.props}
              state={this.state}
              toggleCollapsedSideNav={toggleCollapsedSideNav}
              updateWindowWidth={updateWindowWidth}
            />
            <Content className={`gx-layout-content gx-container-wrap `}>
              <Footer>
                <div className="gx-layout-footer-content">
                  Techcellent Property
                </div>
              </Footer>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Property;
