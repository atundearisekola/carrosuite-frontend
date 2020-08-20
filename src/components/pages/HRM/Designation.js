import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import Table from "../../layouts/Table";
import { Button, Modal } from "antd";
import AddDesignation from "./forms/AddDesignation";
import { useSelector} from "react-redux";

const Designation = () => {
  const [show, setShow] = useState(false);
  const columns = [
    {
      key: "designation",
      title: "Designation",
      dataIndex: "designation",
      width: "50"
    },
    {
      key: "members",
      title: "Members",
      dataIndex: "members",
      width: "50"
    }
  ];

  const actions = [
    {
      name: "View Staff Members",
      route: "/app/hrm/people/designation/:name"
    },
    {
      name: "View Description",
      route: "/app/hrm/people/designation/:description"
    }
  ];

  let dataSource;

  const staffs = useSelector(state => state.staffs);
  const mainDesignations = staffs.designations;
  console.log(mainDesignations);

  if (mainDesignations) {
    dataSource = mainDesignations.map(designation => {
      let members = staffs.staffs.map(staff => {
        return staff.position === designation.id;
      });
      console.log(members);
      return {
        key: designation.id,
        id: designation.id,
        designation: designation.position,
        description: designation.description,
        member: members.length
      };
    });
  }

  const showModal = () => {
    setShow(!show);
  };
  return (
    <div>
      <Modal
        visible={show}
        title="Add Designation"
        // onOk={showModal}
        onCancel={showModal}
      >
        <AddDesignation />
      </Modal>
      <Button className="btn btn-dark" onClick={showModal}>
        Add Designation
      </Button>
      <Table
        columns={columns}
        area="arm"
        dataSource={dataSource}
        actions={actions}
        show={show}
      />
    </div>
  );
};

export default Designation;
