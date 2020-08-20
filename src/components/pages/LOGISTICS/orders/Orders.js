import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Button } from "antd";
import ListOrders from "./ListOrders";
import { FETCH_LOGISTICS_ORDER } from "../../../../actions/types";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../../spinner/Spinner";
const { TabPane } = Tabs;

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.logistics);

  useEffect(() => {
    const getOrders = () => {
      dispatch({ type: FETCH_LOGISTICS_ORDER });
    };
    getOrders();
  }, []);

  return (
    <Tabs defaultActiveKey="staffs" size="large">
      <TabPane tab="Orders" key="orders">
        {loading ? <Spinner /> : <ListOrders orders={orders} />}
      </TabPane>
    </Tabs>
  );
};

export default Orders;
