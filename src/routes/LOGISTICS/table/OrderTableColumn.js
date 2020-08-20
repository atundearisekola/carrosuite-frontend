const OrderTableColumn = [
  {
    title: "Id",
    key: "id",
    fixed: "left",
    dataIndex: "id",
    width: "50",
  },
  {
    title: "Name",
    key: "name",
    fixed: "left",
    dataIndex: "name",
    width: "80",
  },


  {
    title: "Delivery_method",
    key: "delivery_method",
    dataIndex: "delivery_method",
    width: "100",
  },



  {
    title: "Charge",
    key: "charge",
    dataIndex: "charge",
    width: "100",
  },


  {
    title: "Total_distance",
    key: "distance",
    dataIndex: "total_distance",
    width: "100",
  },

  {
    title: "Order_type",
    key: "order_type",
    dataIndex: "order_type",
    width: "100",
  },

  {
    title: "Dropoff_location",
    key: "dropoff_location",
    dataIndex: "dropoff_location",
    width: "100",
  },
  {
    title: "Pickup_location",
    key: "pickup_location",
    dataIndex: "pickup_location",
    width: "100",
  },
  {
    title: "Vehicle_type",
    key: "vehicle",
    dataIndex: "vehicle",
    width: "100",
  },
  {
    title: "Created_date",
    key: "created_date",
    dataIndex: "created_date",
    width: "100",
  },
];

export default OrderTableColumn;

// id:item.id,
// dropoff_location: item.dropoff_locationn,
// pickup_location: item.pickup_location,
// items: item.items,
// delivery_method: item.delivery_method,
// charge: item.charge,
// total_distance: item.total_distance,
// reciever_contact: item.reciever_contact,
// sender_contact: item.sender_contact ,
// reciever_fullname: item.reciever_fullName,
// sender_fullname: item.sender_fullName,
// payment_details: item.payment_details,
// order_type: item.order_type,
// created_date: item.created_date,
// client_name: item.client_name,
// vehicle: item.vehicle,