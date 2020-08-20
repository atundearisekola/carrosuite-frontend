import React from 'react';
import {
  Select,
  Form,
  Row,
  Col,
  Button,
  Divider,
  Input,
  Tooltip,
  Cascader,
  Checkbox,
  AutoComplete,
  Modal,
  DatePicker,
  Table,
  Menu,
  Dropdown,
  message,
} from 'antd';
import {
  StopOutlined,
  PlusOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  DownOutlined,
} from '@ant-design/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const columns = [
  {
    title: 'Property',
    dataIndex: 'property',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: {
      compare: (a, b) => a.location - b.location,
      multiple: 3,
    },
  },
  {
    title: 'Type',
    dataIndex: 'type',
    sorter: {
      compare: (a, b) => a.type - b.type,
      multiple: 2,
    },
  },
  {
    title: 'Action',
    dataIndex: 'english',
    render: (text, record) => <div></div>,
  },
];

function onChange(date, dateString) {
  console.log(date, dateString);
}

const handleInput = (e) => {
  e.preventDefault();
  const name = e.target.name;
  const value = e.target.value;
  this.setState({ [name]: value });
  console.log(this.state);
};

function onChangeTable(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const { Option } = Select;
const ListProperty = () => {
  return (
    <section className="property-section">
      <div className="heading">
        <Divider className="u-margin-bottom-medium" orientation="left">
          <h2 className="heading-primary--sub "> Properties</h2>
        </Divider>
        <Row gutter={16}>
          <Col flex="auto">
            <Form.Item>
              <DatePicker onChange={onChange} />
            </Form.Item>
            <label>State Date</label>
          </Col>
          <Col flex="auto">
            <Form.Item>
              <DatePicker onChange={onChange} />
            </Form.Item>
            <label>End Date</label>
          </Col>
          <Col flex="auto">
            <Form.Item>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Status"
                optionFilterProp="children"
                name="status"
                onChange={handleInput}
                onFocus={handleInput}
                onBlur={handleInput}
                onSearch={handleInput}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="Sold">Sold</Option>
                <Option value="UnSold">UnSold</Option>
              </Select>
            </Form.Item>
            <label>Select Status</label>
          </Col>
          <Col>
            <Button>
              <SearchOutlined /> Search
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn btn-secondary">
              <PlusOutlined />
              Create Property
            </Button>
          </Col>
        </Row>
      </div>

      <div className="property__table">
        <div className="property__table-header">
          <Row justify="space-between">
            <Col>
              <label>Show</label>
              <Select
                name="entries"
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleInput}
              >
                <Option value="10">10</Option>
                <Option value="25">25</Option>
                <Option value="50">100</Option>
                <Option value="100">100</Option>
              </Select>
              <label>Entries</label>
            </Col>
            <Col>
              <Form.Item
                name="search"
                label="Search"
                rules={[
                  {
                    required: true,
                    message: 'Bank Code is required!',
                  },
                ]}
              >
                <Input name="search" onChange={handleInput} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="property__table-header">
          <Table columns={columns} dataSource={{}} onChange={onChangeTable} />
        </div>
      </div>
    </section>
  );
};

export default ListProperty;
