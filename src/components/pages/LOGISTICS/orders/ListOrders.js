import React from "react";
import Table from "../table/Table";
import { Tag } from "antd";
import { useSelector } from "react-redux";
import OrderTableColumn from "../table/OrderTableColumn";

const ListOrders = ({ orders }) => {
  const actions = [
    {
      key: 1,
      name: "View",
      route: "/app/logistics/orders",
    },
    {
      key: 2,
      name: "Take order",
      route: "/app/logistics/order/take",
    },
    {
      key: 3,
      name: "delete",
      route: "/app/logistics/order/delete",
    },
  ];
  let dataSource = orders.length
    ? orders.map((item, idx) => {
        return {
          id: item.id,
          bargain_amount: item.bargain_amount,
          charge: item.charge,
          name: item.client_name,
          created_date: item.created_date,
          delivery_method: item.delivery_method,
          delivery_note: item.delivery_note,
          status: item.isCompleted ? "completed" : "pending",
          item: item.item,
          item_nature: item.item_nature,
          item_type: item.item_type,
          order_type: item.order_type,
          payment_details: item.payment_details,
          pickup_location: item.pickup_location,
          dropoff_location: item.dropoff_location,
          quantity: item.quantity,
          distance: item.total_distance,
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

//   delivery_note: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },

//   payment_details: {
//     type: DataTypes.STRING(255),
//     allowNull: true
//   },

//   signature: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
