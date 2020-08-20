import React from "react";
import Table from "../../layouts/Table";
import { Tag } from "antd";
import { useSelector } from "react-redux";

const ListStaff = () => {
  const columns = [
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
      title: "Email",
      key: "email",
      dataIndex: "email",
      width: "100",
    },

    {
      title: "Position",
      key: "position",
      dataIndex: "position",
      width: "100",
    },
    {
      title: "Department",
      key: "department",
      dataIndex: "department",
      // width: "200"
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      width: "30",
    },
    {
      title: "Verification",
      key: "verification",
      dataIndex: "verification",
      width: "100",
    },
  ];

  const actions = [
    {
      key: 1,
      name: "View Staff",
      route: "/app/hrm/staff",
    },
  ];

  let dataSource;
  const staffs = useSelector((state) => state.staffs);
  const mainStaffs = staffs.staffs;
  if (staffs.staffs.length) {
    console.log("staffs", staffs.staffs);
    dataSource = mainStaffs.map((staff) => {
      return {
        id: staff.id,
        name: `${staff.User.first_name ? staff.User.first_name : ""} ${
          staff.User.last_name ? staff.User.last_name : ""
        }`,
        email: staff.User.email,
        key: staff.User.email,
        gender: staff.User.sex,
        position: staff.Position.position,
        department: staff.Department.deparment,
        verification:
          staff.StaffReferences.length === 0 ? (
            <Tag color="red">No Guarantor Provided</Tag>
          ) : (
            <Tag color="green">Verified</Tag>
          ),
      };
    });
  }

  return (
    <div>
      <Table
        columns={columns}
        area="staff"
        dataSource={dataSource}
        actions={actions}
      />
    </div>
  );
};

export default ListStaff;
