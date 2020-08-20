import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Button, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import PreTax from "./PreTax";
import PostTax from "./PostTax";
const { TabPane } = Tabs;
const Deduction = () => {
  const { SubMenu } = Menu;

  return (
    <Tabs size="large">
      <TabPane tab="Pre-Taxs" key="pretax">
        <PreTax />
      </TabPane>
      <TabPane tab="Post-Tax" key="posttax">
        <PostTax />
      </TabPane>
    </Tabs>
  );
};

export default Deduction;
