import React, { useState } from "react";
import { Checkbox, Menu, Dropdown, Button, Input, Table, Modal, Cascader } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { update_logistics_order_status } from '../../../appRedux/actions/Logistics';
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector, connect } from 'react-redux';

const Table1 = (props) => {
  const { columns, dataSource } = props;
  let newColumns;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [rider, setRider] = useState([]);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState("");
  const [id, setId] = useState(null);
  console.log("RIDER", rider[0], "STATUS HERE:  ", status[0]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleRouting = (routeName, record) => {
    if (routeName.route === "/app/logistics/order/take") {
      setId(record.id);
      setVisible(true);
    } else {
      props.history.push(`${routeName.route}/${record.id}`)
    }
  }
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };


  const handleOk = () => {
    if (!rider[0] || !status[0] || !id) {
      alert("input cant be empty");
      return;
    }
    setLoading(true);
    props.update_logistics_order_status({ ridder: rider[0], status: status[0], id: id })
      .then(() => {
        setVisible(false);
        setLoading(false);
      })
      .catch(err => {
        console.log(err)
      })

  };

  const handleCancel = () => {
    setVisible(false);
  };





  let searchInput;

  // filter form
  const filterForm = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={(node) => {
              searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: "block" }}
          />
          <Button
            className="btn btn-primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
        </Button>
          <Button
            className="btn btn-light"
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
        </Button>
        </div>
      ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
          text
        ),
  });

  const [unchecked, setUnchecked] = useState([]);

  // Display Based On Checked
  const handleChecked = (e) => {
    if (!e.target.checked) {
      setUnchecked(unchecked.push(e.target.name));
      newColumns = realColumns.filter((column) => {
        return !unchecked.includes(column.dataIndex);
      });
      // setRealColumns(newColumns);
    } else {
      console.log(unchecked.filter((key) => key !== e.target.name));
      setUnchecked(unchecked.filter((key) => key !== e.target.name));
      newColumns = realColumns.filter((column) => {
        return !unchecked.includes(column.dataIndex);
      });
    }

    setRealColumns(newColumns);
  };

  const menu = (
    <Menu>
      {" "}
      <Menu.Item>
        <Button className="btn btn-primary">Save Columns</Button>
      </Menu.Item>
      {columns.map((column) => {
        return (
          <Menu.Item key={column.key}>
            <span>
              <Checkbox
                type="checkbox"
                className="checkbox"
                name={column.key}
                key={column.key}
                defaultChecked={true}
                onChange={handleChecked}
              />
              {column.title}
            </span>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  newColumns = columns.map((column) => {
    column.sorter = (a, b) =>
      a[column.dataIndex] > b[column.dataIndex] ? 1 : -1;
    column.sortDirections = ["ascend", "descend"];

    column = { ...column, ...filterForm(column.dataIndex) };

    return column;
  });

  newColumns.push({
    title: (
      <Dropdown overlay={menu}>
        <span>
          Action <DownOutlined type="down" />{" "}
        </span>
      </Dropdown>
    ),
    key: "action",
    fixed: "right",
    dataIndex: "action",
    width: 100,
    render: (text, record) => {
      console.log("RENDER ::", text, record);

      const actionMenu = (
        <Menu className="fs-10">
          {props.actions.map((action) => {

            return (<Menu.Item key={action.key}>
              <Button
                className="btn btn-light"
                style={{ width: "100%" }}
                onClick={() => handleRouting(action, record)}
              >
                {action.name}
              </Button>

            </Menu.Item>)
          })}
        </Menu>
      );

      return (
        <React.Fragment>
          <Dropdown overlay={actionMenu}>
            <span>
              Action <DownOutlined />
            </span>
          </Dropdown>
        </React.Fragment>
      );
    },
  });

  const [realColumns, setRealColumns] = useState(newColumns);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "85%" }}>
        <Table
          rowSelection={rowSelection}
          columns={realColumns}
          dataSource={dataSource}
          scroll={{ x: 2000, y: 300 }}
        />
      </div>



      <Modal
        visible={visible}
        title="Assign a Dispatch rider to this Order"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
                    </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >

        <Cascader
          onChange={(text) => setRider(text)}
          size={'middle'}
          className="form-item"
          options={riders.map((option) => ({
            label: option,
            value: option,
          }))}
          placeholder={`Select dispatch rider`}
        />
        <br />
        <br />
        <Cascader
          onChange={(text) => setStatus(text)}
          size={'middle'}
          className="form-item"
          options={order_status.map((option) => ({
            label: option,
            value: option,
          }))}
          placeholder={`Select order status`}
        />

      </Modal>
    </div>
  );
};

export default withRouter(connect(null, { update_logistics_order_status })(Table1));

const order_status = [
  "Order Confirm",
  "Rider Disptached (enroute to pickup)",
  "Delivery in Progress",
  "Delivery Done"
];

const riders = [
  "HALUNA",
  "JUDE",
  'OLAWOLE',
  "FESTUS"
]
































