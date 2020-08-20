import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Cascader } from "antd";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userSignUp,
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import { message } from "antd/lib/index";
import CircularProgress from "components/CircularProgress/index";


const FormItem = Form.Item;

const SignUp = (props) => {


  const dispatch = useDispatch();
  const history = useHistory();
  const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);


  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    const data = {
      email: values.email,
      name: values.companyName,
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
      password2: values.confirmPassword,
      phone_number: values.phoneNumber,
      country: values.operatingCountry[0],
      state: values.state,
      city: values.city,
      industry: values.industry[0],
    };
    dispatch(showAuthLoader());
    dispatch(userSignUp(data));
  };

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content-1">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
              <img src={"https://via.placeholder.com/272x395"} alt='Neature' />
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signUp" /></h1>
              <p><IntlMessages id="app.userAuth.bySigning" /></p>
              <p><IntlMessages id="app.userAuth.getAccount" /></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")} />
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">



              <FormItem rules={[{ required: true, message: 'Please enter your first name!' }]} name="firstName">
                <Input placeholder="Enter your first name" />
              </FormItem>

              <FormItem rules={[{ required: true, message: 'Please enter your last name!' }]} name="lastName">
                <Input placeholder="Enter your last name" />
              </FormItem>



              <FormItem rules={[{ required: true, message: 'Please input your company name!' }]} name="companyName">
                <Input placeholder="Enter your company name" />
              </FormItem>



              <FormItem rules={[{ required: true, message: 'Please enter your operating country!' }]} name="operatingCountry">
                <Cascader
                  size={'middle'}
                  className="form-item"
                  options={countryList.map((option) => ({
                    label: option,
                    value: option,
                  }))}
                  placeholder={`Select operating country`}
                />
              </FormItem>



              <FormItem rules={[{ required: true, message: 'Please enter your industry!' }]} name="industry">
                <Cascader
                  size={'middle'}
                  className="form-item"
                  options={industries.map((option) => ({
                    label: option,
                    value: option,
                  }))}
                  placeholder={`Select industry if 'others' please specify`}
                />
              </FormItem>





              <FormItem rules={[{ required: true, message: 'Please enter opeating state of your company' }]} name="state">
                <Input placeholder="Enter operating state of Your company" />
              </FormItem>



              <FormItem rules={[{ required: true, message: 'Please enter operating City Of Your Company' }]} name="city">
                <Input placeholder="Enter operating city of Your company" />
              </FormItem>



              <FormItem rules={[{ required: true, message: 'Please enter your phone number' }]} name="phoneNumber">
                <Input placeholder="Enter  Your phone number" />
              </FormItem>


              <FormItem name="email" rules={[{
                required: true, type: 'email', message: 'The input is not valid E-mail!',
              }]}>
                <Input placeholder="Email" />
              </FormItem>


              <FormItem name="password"
                rules={[{ required: true, message: 'Please enter your Password!' }]}>
                <Input type="password" placeholder="Password" />
              </FormItem>

              <FormItem name="confirmPassword"
                rules={[{ required: true, message: 'Please  your Password!' }]}>
                <Input type="password" placeholder="Confirm password" />
              </FormItem>


              <FormItem name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password">Forgot password</Link>
              </FormItem>


              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp" />
                </Button>
                <span><IntlMessages id="app.userAuth.or" /></span> <Link to="/signin"><IntlMessages
                  id="app.userAuth.signIn" /></Link>
              </FormItem>



              {/* <div className="gx-flex-row gx-justify-content-between">
                <span>or connect with</span>
                <ul className="gx-social-link">
                  <li>
                    <GoogleOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userGoogleSignIn());
                    }} />
                  </li>
                  <li>
                    <FacebookOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userFacebookSignIn());
                    }} />
                  </li>
                  <li>
                    <GithubOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userGithubSignIn());
                    }} />
                  </li>
                  <li>
                    <TwitterOutlined onClick={() => {
                      dispatch(showAuthLoader());
                      dispatch(userTwitterSignIn());
                    }} />
                  </li>
                </ul>
              </div> */}
            </Form>
          </div>
          {loader &&
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          }
          {showMessage &&
            message.error(alertMessage)}
        </div>
      </div>
    </div>
  );
};


export default SignUp;



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
