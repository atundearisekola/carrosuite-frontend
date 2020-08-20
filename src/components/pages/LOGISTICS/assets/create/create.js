import axios from "axios";
import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {Form} from '@ant-design/compatible';
import { Input, Button, Checkbox,Tabs, Select, DatePicker} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ADD_ASSET } from "../../../../../actions/types";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../../../spinner/Spinner";
import {CreateAssets,LoadAssets} from '../../../../../actions/AssetAction';
const { TabPane } = Tabs;
const {Option} = Select;

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://propertycloud-node.herokuapp.com/"
    : "http://localhost:5000/";


const CreateAsset = (props) => {
  const { getFieldDecorator, getFieldsError } = props.form;
  const dispatch = useDispatch();

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  
  const createAsset = (e) => {
    e.preventDefault();

    // Validate Form
    props.form.validateFields((err, values) => {
      //alert(JSON.stringify(values));
      if (!err) {
        const data = {
          assetCat: values.assetCat,
          assetName: values.assetName,
          costPerUnit: values.costPerUnit,
          accountOfficer: values.accountOfficer,
          purchaseDate: values.purchaseDate,
          assetVendor: values.assetVendor,
          assetBrand: values.assetBrand,
          assetBrandModel: values.brandModel,
          assetBrandYear: values.brandYear,
        };

        dispatch({
          type: ADD_ASSET,
          payload: data,
        });
      }
    });
  };

  return (
    <Tabs defaultActiveKey="staffs" size="large">
      <TabPane tab="Create Asset" key="assets">
        <Form
          className="login-form"
          // initialValues={{
          //   remember: true,
          // }}
          //onFinish={onFinish}
          onSubmit={createAsset}
        >

          <Form.Item>
            {getFieldDecorator("assetCat", {
              rules: [
                {
                  required: true,
                  message: "Please input your Asset category",
                },
              ],
            })(
          
            <Select placeholder="Please select a Asset category">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator("assetName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Asset Name",
                },
              ],
            })(
            <Input
              placeholder="Asset Name"
              name="assetName"
            />
            )}
          </Form.Item>

          <Form.Item>
          {getFieldDecorator("costPerUnit", {
              rules: [
                {
                  required: true,
                  message: "Please input your Cost Per Unit",
                },
              ],
            })(
            <Input
              placeholder="Asset Cost Per Unit"
              name="costPerUnit"
            />
            )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator("accountOfficer", {
              rules: [
                {
                  required: true,
                  message: "Please input your Account Officer",
                },
              ],
            })(
            <Select placeholder="Please select an Account Officer" name="accountOfficer">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            )}
          </Form.Item>

          <Form.Item name="date-picker" label="DatePicker" {...config}>
            <DatePicker />
          </Form.Item>

          <Form.Item>
          {getFieldDecorator("assetVendor", {
              rules: [
                {
                  required: true,
                  message: "Please input your Asset Vendor",
                },
              ],
            })(
            <Select placeholder="Please select an Asset Vendor" name="assetVendor">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            )}
          </Form.Item>

          <Form.Item>
          {getFieldDecorator("assetBrand", {
              rules: [
                {
                  required: true,
                  message: "Please input your Asset Brand",
                },
              ],
            })(
            <Select placeholder="Please select an Asset Brand" name="assetBrand">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            )}
          </Form.Item>

          <Form.Item>
          {getFieldDecorator("brandModel", {
              rules: [
                {
                  required: true,
                  message: "Please input your Asset Brand Model",
                },
              ],
            })(
            <Select placeholder="Please select an Brand Model" name="brandModel">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("brandYear", {
              rules: [
                {
                  required: true,
                  message: "Please input your Asset Brand Year",
                },
              ],
            })(
            <Select placeholder="Please select an brandYear" name="brandYear">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Create Asset
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
    </Tabs>
  );
};
const AssetForm = Form.create({ name: "Assetform" })(CreateAsset);

export default withRouter(AssetForm);


