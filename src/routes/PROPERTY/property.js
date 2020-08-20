import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar/index';
import HorizontalDefault from './Topbar/HorizontalDefault/index';
import Topbar from './Topbar/index';
import Container from './navigations/Container';
import DashboardSideBarNav from './navigations/DashboardSideBarNav';
import AuthRoute from '../../../routes/AuthRoute';
import Dashboard from './dashboard';
import AddProperty from './form/addProperty';
import ListProperty from './listProperty';
import PropertyInspection from './propertyInspection';
import AllocateProperty from './form/allocateProperty';
import AllocatedProperty from './allocatedProperty';
import PropertyReport from './propertyReport';
import Tenanats from './tenants';

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
        <Container sidebar={<DashboardSideBarNav {...this.props} />}>
          <main className="property">
            <Switch>
              <AuthRoute exact path="/app/property" component={Dashboard} />
              <AuthRoute
                exact
                path="/app/property/dashboard"
                component={Dashboard}
              />
              <AuthRoute
                path="/app/property/add-property"
                component={AddProperty}
              />
              <AuthRoute
                path="/app/property/list-property"
                component={ListProperty}
              />
              <AuthRoute
                path="/app/property/property-inspection"
                component={PropertyInspection}
              />
              <AuthRoute
                path="/app/property/allocate-property"
                component={AllocateProperty}
              />
              <AuthRoute
                path="/app/property/allocated-properties"
                component={AllocatedProperty}
              />
              <AuthRoute
                path="/app/property/property-report"
                component={PropertyReport}
              />
              <AuthRoute path="/app/property/tenants" component={Tenanats} />
            </Switch>
          </main>
        </Container>
      </div>
    );
  }
}
export default Property;
