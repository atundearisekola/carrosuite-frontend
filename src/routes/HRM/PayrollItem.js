import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Button, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Earning from "./Earning";
import Deduction from "./Deduction";
import Reimbursement from "./Reimbursement";
import AddNewEarning from "./modal/AddNewEarning";
import AddPostTaxDeduction from "./modal/AddPostTaxDeduction";
import AddPreTaxDeduction from "./modal/AddPreTaxDeduction";

const { TabPane } = Tabs;
const PayrollItem = () => {
  const { SubMenu } = Menu;
  const operations = (
    <Menu style={{ width: 256 }} mode="vertical">
      <SubMenu key="sub1" icon={<MailOutlined />} title="Add Item">
        <SubMenu key="1" title="Earning">
          <Menu.Item key="1">
            <AddNewEarning />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="2" title="Correction">
          <Menu.Item key="7">Option 7</Menu.Item>
        </SubMenu>
        <SubMenu key="3" title="Post Tax Deduction">
          <Menu.Item key="7">
            <AddPostTaxDeduction />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="4" title="Pre Tax Deduction">
          <Menu.Item key="7">
            <AddPreTaxDeduction />
          </Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  );

  return (
    <Tabs tabBarExtraContent={operations} size="large">
      <TabPane tab="Earning" key="earning">
        <Earning />
      </TabPane>
      <TabPane tab="Deductions" key="deductions">
        <Deduction />
      </TabPane>
      <TabPane tab="Reimbursement" key="reimbursement">
        <Reimbursement />
      </TabPane>
    </Tabs>
  );
};

export default PayrollItem;
