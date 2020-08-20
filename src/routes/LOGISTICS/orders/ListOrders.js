import React from "react";
import Table from "../table/Table";
import { Tag } from "antd";
import { useSelector } from "react-redux";
import OrderTableColumn from "../table/OrderTableColumn";
import { useRouteMatch } from 'react-router-dom';

const ListOrders = ({ orders }) => {
  const match = useRouteMatch();
  const actions = [
    {
      key: 1,
      name: "View",
      route: `${match.url}/view`,
    },
    {
      key: 2,
      name: "Take order",
      route: "/app/logistics/order/take",
    },
    {
      key: 3,
      name: "delete",
      route: `${match.url}/delete`,
    },
  ];
  console.log(orders);
  const orderType = (type) => {
    if (type === "Sender_Screen_sender") return "Sending";
    if (type === "Reciever_Screen_reciever") return "Recieving";
    if (type === "Other_Screen_other") return "Third Party";
  };
  let dataSource = orders && orders.length
    ? orders.map((item, idx) => {
      return {
        id: item.id,
        dropoff_location: item.dropoff_location,
        pickup_location: item.pickup_location,
        delivery_method: item.delivery_method,
        charge: item.charge,
        total_distance: item.total_distance,
        reciever_contact: item.reciever_contact,
        sender_contact: item.sender_contact,
        reciever_fullname: item.reciever_fullName,
        sender_fullname: item.sender_fullName,
        order_type: orderType(item.order_type),
        created_date: item.created_date,
        name: item.client_name,
        vehicle: item.vehicle,

      };
    })
    : null;
  return (
    <div>
      <Table
        columns={OrderTableColumn}
        area="order"
        dataSource={dataSource}
        actions={actions}
      />
    </div>
  );
};

export default ListOrders;
