// import React from "react";
// import CustomersTable from "../table/CustomersTable";
// import { Tag } from "antd";
// import { useSelector } from "react-redux";
// import customersTableColumns from "../table/customersTableColumns";

// const ListOfCustomers = () => {
//   //   const actions = [
//   //     {
//   //       key: 1,
//   //       name: "View Staff",
//   //       route: "/app/hrm/staff",
//   //     },
//   //   ];

//   let dataSource;
//   const staffs = useSelector((state) => state.staffs);
//   const mainStaffs = staffs.staffs;
//   if (staffs.staffs.length) {
//     console.log("staffs", staffs.staffs);
//     dataSource = mainStaffs.map((staff) => {
//       return {
//         id: staff.id,
//         name: `${staff.User.first_name ? staff.User.first_name : ""} ${
//           staff.User.last_name ? staff.User.last_name : ""
//         }`,
//         email: staff.User.email,
//         key: staff.User.email,
//         gender: staff.User.sex,
//         position: staff.Position.position,
//         department: staff.Department.deparment,
//         verification:
//           staff.StaffReferences.length === 0 ? (
//             <Tag color="red">No Guarantor Provided</Tag>
//           ) : (
//             <Tag color="green">Verified</Tag>
//           ),
//       };
//     });
//   }
//   return (
//     <div>
//       <CustomersTable
//         columns={customersTableColumns}
//         area="staff"
//         dataSource={dataSource}
//         // actions={actions}
//       />
//     </div>
//   );
// };

// export default ListOfCustomers;
