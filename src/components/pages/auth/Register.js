import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BankOutlined,
  LockOutlined,
  MailOutlined,
  PushpinOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Form } from "@ant-design/compatible";
import "@ant-design/compatible/assets/index.css";

import { Input, Select, Button, message, Cascader } from "antd";
import { REGISTER } from "../../../actions/types";
import { Link, withRouter } from "react-router-dom";
import UserForm from "../../layouts/AuthForm";  

const Register = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    props.history.push("/app/logistics");
  }
  const { getFieldDecorator, getFieldsError } = props.form;
  const dispatch = useDispatch();

  const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some((field) => fieldsError[field]);
  };
  const { Option } = Select;

  const n = [...Array(300).keys()];
  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "234",
  })(
    <Select style={{ width: 70 }}>
      {n.map((y) => {
        return (
          <Option key={y + 1} value={`${y + 1}`}>
            +{y + 1}
          </Option>
        );
      })}
    </Select>
  );
  const register = (e) => {
    e.preventDefault();

    // Validate Form
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const data = {
          email: values.email,
          name: values.companyName,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
          password2: values.confirmPassword,
          phone_number: values.prefix + values.phoneNumber,
          country: values.operatingCountry[0],
          state: values.state,
          city: values.city,
          industry: values.industry[0],
        };

        dispatch({
          type: REGISTER,
          payload: data,
        });
      }else{
        console.log(err);
      }
    });
  };

  return (
    <UserForm
      body={
        <div className="form">
          <h1 className="large">Register</h1>
          <Form layout="horizontal" onSubmit={register}>
            <div className="form-group">
              <Form.Item>
                {getFieldDecorator("firstName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your First Name",
                    },
                  ],
                })(
                  <Input
                    className="form-item"
                    placeholder="First Name"
                    prefix={<UserOutlined className="icon" />}
                    label="First Name"
                    name="firstName"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("lastName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Last Name",
                    },
                  ],
                })(
                  <Input
                    className="form-item"
                    prefix={<UserOutlined className="icon" />}
                    placeholder="Last Name"
                    label="Last Name"
                    name="laststName"
                  />
                )}
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item>
                {getFieldDecorator("companyName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Company Name",
                    },
                  ],
                })(
                  <Input
                    prefix={<BankOutlined className="icon" />}
                    className="form-item"
                    placeholder=" Company Name"
                    label="Company Name"
                    name="Company Name"
                  />
                )}
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item>
                {getFieldDecorator("operatingCountry", {
                  rules: [
                    {
                      required: true,
                      message: "Please select an opertating country",
                    },
                  ],
                })(
                  <Cascader
                    className="form-item"
                    options={countryList.map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    placeholder={`Select Operating Country`}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("industry", {
                  rules: [
                    {
                      required: true,
                      message: "Please select an Industry",
                    },
                  ],
                })(
                  <Cascader
                    className="form-item"
                    options={industries.map((option) => ({
                      label: option,
                      value: option,
                    }))}
                    placeholder={`Select Industry If 'Others' please specify`}
                  />
                )}
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item>
                {getFieldDecorator("state", {
                  rules: [
                    {
                      required: true,
                      message: "Input Operating State Of Your Company",
                    },
                  ],
                })(
                  <Input
                    className="form-item"
                    placeholder="State"
                    prefix={<PushpinOutlined className="icon" />}
                    label="State"
                    name="state"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("city", {
                  rules: [
                    {
                      required: true,
                      message: "Input Operating City Of Your Company",
                    },
                  ],
                })(
                  <Input
                    className="form-item"
                    prefix={<PushpinOutlined className="icon" />}
                    placeholder="City"
                    label="City"
                    name="city"
                  />
                )}
              </Form.Item>
            </div>

            <div className="form-group">
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your Email",
                    },
                  ],
                })(
                  <Input
                    className="form-item"
                    prefix={<MailOutlined className="icon" />}
                    placeholder="Email"
                    label="Email"
                    name="email"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("phoneNumber", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ],
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            </div>
            <div className="form-group">
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Password",
                    },
                  ],
                })(
                  <Input.Password
                    prefix={<LockOutlined className="icon" />}
                    className="form-item"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    name="password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("confirmPassword", {
                  rules: [
                    {
                      required: true,
                      message: "Please Comfirm Your Password",
                    },
                  ],
                })(
                  <Input.Password
                    prefix={<LockOutlined className="icon" />}
                    className="form-item"
                    type="confirmPassword"
                    placeholder=" Comfirm Password"
                    label="Password"
                    name="password"
                  />
                )}
              </Form.Item>
            </div>
            <Button
              htmlType="submit"
              id="submit"
              className="btn btn-primary form-item"
              disabled={hasErrors(getFieldsError())}
              block
              //   loading
            >
              Register
            </Button>
          </Form>
          <p className="my-1 lead text-greydark text-sm">
            Already have an account?{" "}
            <Link className="text-primary" to="/">
              Login
            </Link>
          </p>
        </div>
      }
    />
  );
};

const RegisterForm = Form.create({ name: "registerform" })(Register);

export default withRouter(RegisterForm);

const industries = [
  "Agriculture",
  "Mining and quarrying",
  "Manufacturing",
  "Energy",
  "Construction",
  "Wholesale and Retail Trade",
  "Transportation",
  "Information and Communication",
  "Financial",
  "Real estate",
  "Professional, scientific and technical activities",
  "Administrative",
  "Education",
  "Health Care",
  "Arts, entertainment and recreation",
  "Others",
];

// List of all countries in a simple list / array.
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "CuraÃ§ao",
  "Cyprus",
  "Czechia",
  "CÃ´te d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "RÃ©union",
  "Saint BarthÃ©lemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan (Province of China)",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Ã…land Islands",
];
