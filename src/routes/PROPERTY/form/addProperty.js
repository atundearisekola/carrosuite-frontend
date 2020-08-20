import React, { Component, useState } from "react";
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
} from "antd";
import { StopOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AddModal from "../modal/AddVendor";
import AddState from "../modal/AddState";
import AddCity from "../modal/AddCity";
import AddOperatingAccount from "../modal/AddOperatingAccount";
import AddInventoryAccount from "../modal/AddInventoryAccount";
import { addProperty } from "appRedux/actions/property";

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,

      vendors: this.props.vendors,
      countries: this.props.country,
      states: this.props.state,
      cities: this.props.cities,
      operating_accounts: this.props.operating_account,
      inventory_accounts: this.props.inventory_account,
      country: this.props.country,
      state: this.props.state,
      city: this.props.cities,
      operating_account: "",
      inventory_account: "",
      item_number: "",
      property_name: "",
      property_type: "",
      property_address: "",
      vendor: "",
      property_metric: "",
      purchase_cost: "",
      purchase_method: "",
      sales_account: "",
      sales_cost: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      unitFields: [],
    };
  }

  render() {
    const { Option, OptGroup } = Select;
    const ButtonGroup = Button.Group;

    const vendorList = this.state.vendors
      ? this.state.vendors.map((option) => {
          return <Option value={option.company}>{option.company}</Option>;
        })
      : null;

    const countryList = this.state.countries
      ? this.state.countries.map((option) => {
          return <Option value={option.name}>{option.name}</Option>;
        })
      : null;

    const stateList = this.state.states
      ? this.state.states.map((option) => {
          return <Option value={option.name}>{option.name}</Option>;
        })
      : null;

    const cityList = this.state.cities
      ? this.state.cities.map((option) => {
          return <Option value={option.name}>{option.name}</Option>;
        })
      : null;

    const operatingAccountList = this.state.operating_accounts
      ? this.state.operating_accounts.map((option) => {
          return <Option value={option.name}>{option.name}</Option>;
        })
      : null;

    const inventoryAccountList = this.state.inventory_accounts
      ? this.state.inventory_accounts.map((option) => {
          return <Option value={option.name}>{option.name}</Option>;
        })
      : null;

    const onFinish = () => {
      console.log("Received values of form: ");

      const data = {
        operating_account: this.state.operating_account,
        inventory_account: this.state.inventory_account,
        item_number: this.state.item_number,
        property_name: this.state.property_name,
        property_type: this.state.property_type,
        property_address: this.state.property_address,
        vendor: this.state.vendor,
        property_metric: this.state.property_metric,
        purchase_cost: this.state.purchase_cost,
        purchase_method: this.state.purchase_method,
        sales_account: this.state.sales_account,
        sales_cost: this.state.sales_cost,
      };
      this.props.addProperty(data);
    };

    const handleInput = (e) => {
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;
      this.setState({ [name]: value }, () => {
        validateField(name, value);
      });
      console.log(this.state);
    };

    const validateField = (fieldName, value) => {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch (fieldName) {
        case "email":
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? "" : " is invalid";
          break;
        case "password":
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? "" : " is too short";
          break;
        default:
          break;
      }
      this.setState(
        {
          formErrors: fieldValidationErrors,
          emailValid: emailValid,
          passwordValid: passwordValid,
        },
        validateForm
      );
    };

    const validateForm = () => {
      this.setState({
        formValid: this.state.emailValid && this.state.passwordValid,
      });
    };

    const addUnit = () => {
      this.setState((prevState) => ({
        unitFields: [
          ...prevState.unitFields,
          { unit: "", floor: "", size: "", remark: "" },
        ],
      }));

      console.log(this.state.unitFields);
    };

    const removeUnit = (index) => {
      var array = [...this.state.unitFields];
      array.splice(index, 1);
      this.setState({ ...this.state, unitFields: array });
    };

    const onChangeUnit = (e, index) => {
      var arrays = [...this.state.unitFields];
      let array = {
        ...arrays[index],
        [e.target.name]: e.target.value,
      };

      arrays[index] = array;

      this.setState({ ...this.state, unitFields: arrays });
      console.log(this.state.unitFields);
    };

    return (
      <section className="property-section">
        <div className="heading">
          <Divider className="u-margin-bottom-medium" orientation="left">
            <h2 className="heading-primary--sub ">Add propery</h2>
          </Divider>
        </div>

        <div className="property-form">
          <Form
            className="property-form__form"
            {...formItemLayout}
            name="add_property"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="item_number"
              rules={[
                {
                  type: "text",
                  message: "The input is not valid Number",
                },
                {
                  required: true,
                  message: "Enter Item Number!",
                },
              ]}
            >
              <input
                name="item_number"
                onChange={handleInput}
                type="text"
                class="form__input"
                placeholder=" Enter Item Number (Optional)"
                id="item_number"
                value={this.state.item_number}
                required
              />
              <label for="item_number" class="form__label">
                Enter Item Number (Optional)
              </label>
            </Form.Item>

            <Row gutter={16}>
              <Col flex="auto">
                <label>Select Property Type</label>
                <Form.Item>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder=" Enter a Property Type"
                    optionFilterProp="children"
                    name="property_type"
                    onChange={handleInput}
                    onFocus={handleInput}
                    onBlur={handleInput}
                    onSearch={handleInput}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={this.state.property_type}
                  >
                    <OptGroup label="Residential">
                      <Option value="Condo/Townhome">Condo/Townhome</Option>
                      <Option value="Multi-Family/Terrace">
                        Multi-Family/Terrace
                      </Option>
                      <Option value="Single-Family/Duplex">
                        Single-Family/Duplex
                      </Option>
                    </OptGroup>
                    <OptGroup label="Commercial">
                      <Option value="Industrial">Industrial</Option>
                      <Option value="Office">Office</Option>
                      <Option value="Retail">Retail</Option>
                      <Option value="Shopping Center">Shopping Center</Option>
                      <Option value="Storage">Storage</Option>
                      <Option value="Event Center">Event Center</Option>
                    </OptGroup>
                  </Select>
                </Form.Item>
              </Col>
              <Col flex="auto">
                <label>Select Vendor</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Select Vendor"
                      optionFilterProp="children"
                      name="vendor"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      defaultValue={this.state.vendor}
                    >
                      {vendorList}
                    </Select>
                    <AddModal />
                  </ButtonGroup>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Enter Property Name",
                },
              ]}
              hasFeedback
            >
              <input
                type="text"
                class="form__input"
                placeholder="Enter Property Name"
                id="property_name"
                name="property_name"
                required
                value={this.state.property_name}
                onChange={handleInput}
              />
              <label for="property_name" class="form__label">
                Enter Property Name
              </label>
            </Form.Item>

            <Form.Item
              name="address"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Enter Property Street Address!",
                },
              ]}
            >
              <input
                type="text"
                class="form__input"
                placeholder="Enter Property Street Address"
                id="property_address"
                name="property_address"
                value={this.state.property_address}
                onChange={handleInput}
                required
              />
              <label for="property_address" class="form__label">
                Enter Property Street Address
              </label>
            </Form.Item>

            <Form.Item>
              <label>Country</label>
              <Select
                showSearch
                placeholder="Select a Country"
                optionFilterProp="children"
                name="country"
                onChange={handleInput}
                onFocus={handleInput}
                onBlur={handleInput}
                onSearch={handleInput}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                defaultValue={this.state.country}
              >
                {countryList}
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col flex="auto">
                <label>State</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      placeholder="Select a State"
                      optionFilterProp="children"
                      name="state"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      defaultValue={this.state.state}
                    >
                      {stateList}
                    </Select>
                    <AddState />
                  </ButtonGroup>
                </Form.Item>
              </Col>
              <Col flex="auto">
                <label>City</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      placeholder="Select a State"
                      optionFilterProp="children"
                      name="state"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      defaultValue={this.state.city}
                    >
                      {cityList}
                    </Select>
                    <AddCity />
                  </ButtonGroup>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col flex="auto">
                <label>Operating Account</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      placeholder="Select an Operating Account"
                      optionFilterProp="children"
                      name="operating_account"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      defaultValue={this.state.operating_account}
                    >
                      {operatingAccountList}
                    </Select>
                    <AddOperatingAccount />
                  </ButtonGroup>
                </Form.Item>
              </Col>
              <Col flex="auto">
                <label>Select Property Metric</label>
                <Form.Item>
                  <Select
                    showSearch
                    placeholder="Select Property Metric"
                    optionFilterProp="children"
                    name="property_metric"
                    onChange={handleInput}
                    onFocus={handleInput}
                    onBlur={handleInput}
                    onSearch={handleInput}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={this.state.property_metric}
                  >
                    <Option value="Square Metres">Square Metres</Option>
                    <Option value="Square Feets">Square Feets</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col flex="auto">
                <label>Purchase Method</label>
                <Form.Item>
                  <Select
                    showSearch
                    placeholder="Don't Record Purchase"
                    optionFilterProp="children"
                    name="purchase_method"
                    onChange={handleInput}
                    onFocus={handleInput}
                    onBlur={handleInput}
                    onSearch={handleInput}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    defaultValue={this.state.purchase_method}
                  >
                    <Option value="Cash">Cash</Option>
                    <Option value="Credit">Credit</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col flex="auto">
                <Form.Item
                  name="prop_cost"
                  rules={[
                    {
                      type: "text",
                      message: "The input is not valid Number",
                    },
                    {
                      required: true,
                      message: "Enter Property Purchase Cost",
                    },
                  ]}
                >
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" Enter Property Purchase Cost"
                    id="purchase_cost"
                    required
                    name="purchase_cost"
                    value={this.state.purchase_cost}
                    onChange={handleInput}
                  />
                  <label for="purchase_cost" class="form__label">
                    Enter Property Purchase Cost
                  </label>
                </Form.Item>
              </Col>
            </Row>

            <Divider className="u-margin-bottom-small">
              <h1>Select Accounts Or Leave Blank To Auto Generate</h1>
            </Divider>

            <Row gutter={16}>
              <Col flex="auto">
                <label>Inventory Account</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      placeholder="Select an Account"
                      optionFilterProp="children"
                      name="inventory_accouunt"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {inventoryAccountList}
                    </Select>
                    <AddInventoryAccount />
                  </ButtonGroup>
                </Form.Item>
              </Col>
              <Col flex="auto">
                <label>Cost of Sales Account</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      placeholder="Select an Account"
                      optionFilterProp="children"
                      name="sales_cost"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {inventoryAccountList}
                    </Select>
                    <AddInventoryAccount />
                  </ButtonGroup>
                </Form.Item>
              </Col>

              <Col flex="auto">
                <label>Sales Account</label>
                <Form.Item>
                  <ButtonGroup>
                    <Select
                      showSearch
                      placeholder="Select an Account"
                      optionFilterProp="children"
                      name="sales_account"
                      onChange={handleInput}
                      onFocus={handleInput}
                      onBlur={handleInput}
                      onSearch={handleInput}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {inventoryAccountList}
                    </Select>
                    <AddInventoryAccount />
                  </ButtonGroup>
                </Form.Item>
              </Col>
            </Row>

            <h1>Add Units</h1>

            {this.state.unitFields.map((units, index) => (
              <Row justify="space-between" className="u-margin-bottom-small">
                <Col>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Input
                        name="unit"
                        value={units.unit}
                        onChange={(e) => {
                          onChangeUnit(e, index);
                        }}
                        placeholder="Unit No."
                        maxLength={25}
                      />
                    </Col>
                    <Col span={6}>
                      <Input
                        name="floor"
                        value={units.floor}
                        onChange={(e) => {
                          onChangeUnit(e, index);
                        }}
                        placeholder="Floor No."
                        maxLength={25}
                        min={1}
                        max={10}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row gutter={16}>
                    <Col span={6}>
                      <Input
                        name="size"
                        value={units.size}
                        onChange={(e) => {
                          onChangeUnit(e, index);
                        }}
                        placeholder="Size."
                        maxLength={10}
                      />
                    </Col>
                    <Col>
                      <Input
                        name="remark"
                        value={units.remark}
                        onChange={(e) => {
                          onChangeUnit(e, index);
                        }}
                        placeholder="Remarks"
                        maxWidth={25}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col>
                  {" "}
                  <Button
                    onClick={() => removeUnit(index)}
                    className="btn btn-danger"
                  >
                    <DeleteOutlined />
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}

            <Button
              className="btn btn-success u-margin-bottom-medium"
              onClick={addUnit}
            >
              Add a unit
            </Button>
            <Divider className="u-margin-bottom-small"></Divider>
            <Row gutter={16}>
              <Col>
                <Button
                  disabled={!this.state.formValid}
                  className="btn btn-secondary"
                  onClick={onFinish}
                >
                  <PlusOutlined />
                  Create Property
                </Button>
              </Col>
              <Col>
                <Button className="btn btn-danger">
                  <StopOutlined /> Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        addProperty,
      },
      dispatch
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    vendors: state.property.vendors,
    country: state.property.country,
    state: state.property.state,
    cities: state.property.cities,
    operating_accounts: state.property.operating_accounts,
    inventory_account: state.property.inventory_account,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);
