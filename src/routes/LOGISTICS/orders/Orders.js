import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Button, message } from "antd";
import ListOrders from "./ListOrders";
import { hide_logistics_message } from '../../../appRedux/actions/Logistics';
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from '../../../components/CircularProgress/index';

const { TabPane } = Tabs;

const Orders = () => {



  const dispatch = useDispatch();
  const { loading, alertMessage, orders, showMessage } = useSelector(({ logistics }) => logistics);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hide_logistics_message());
      }, 100);
    }
    const getOrders = () => {
      dispatch({ type: "FETCH_ORDERS" });
    };
    getOrders();
  }, []);

  const loaderCircle = (
    <div className="gx-loader-view">
      <CircularProgress />
    </div>);


  return (
    <React.Fragment>
      <Tabs defaultActiveKey="staffs" size="large">
        <TabPane tab="Orders" key="orders">
          {loading
            ? loaderCircle
            : <ListOrders orders={orders} />
          }
        </TabPane>
      </Tabs>
      {
        showMessage && !loading
          ? message.error(alertMessage.toString())
          : null
      }
    </React.Fragment>
  );
};

export default Orders;
