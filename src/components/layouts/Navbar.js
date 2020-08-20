import React from "react";

import { Badge, Menu, Dropdown, Empty } from "antd";
import {
  EllipsisOutlined, 
  MenuUnfoldOutlined, 
  MenuOutlined, 
  BellOutlined , 
  UserOutlined} from '@ant-design/icons'
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../actions/types";
import { Link } from "react-router-dom";
const Navbar = props => {
  const dispatch = useDispatch();
  const navItem = {
    display: "flex",
    fontSize: "3rem"
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/app/notifications">View Notifications</Link>
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          dispatch({
            type: LOG_OUT
          });
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  const DropdownMenu = () => {
    return (
      <Dropdown key="more" overlay={menu}>
      <EllipsisOutlined 
        className="text-light"
          style={{
            fontSize: 20,
            verticalAlign: "top"
          }}
      />
      </Dropdown>
    );
  };
  const notification = <Empty />;

  const Notification = () => {
    return (
      <Dropdown key="more" overlay={notification} style={{ width: "6rem" }}>
        <Badge count={3} color={"orange"}>
        <BellOutlined 
           className="text-light"
            style={{
              fontSize: 20,
              verticalAlign: "top"
            }}
        />{" "}
        </Badge>
      </Dropdown>
    );
  };
  return (
    <nav className="nav">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="logo" />
        {props.collapsed
        ?<MenuUnfoldOutlined className="trigger icon" onClick={props.toggle}/>
        :<MenuOutlined className="trigger icon" onClick={props.toggle}/>
        }
      </div>

      <ul style={navItem} className="text-light">
        <li>
          <UserOutlined />{" "}
        </li>
        <li>
          <Notification />
        </li>
        <li>
          <DropdownMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
