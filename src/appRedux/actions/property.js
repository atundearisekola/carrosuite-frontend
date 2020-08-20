import { createAction } from 'redux-actions';
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const FETCH_PROPERTIES = 'FETCH_PROPERTIES';
export const ADD_PROPERTY_RESULT = 'ADD_PROPERTY_RESULT';
export const FETCH_PROPERTIES_RESULT = 'FETCH_PROPERTIES_RESULT';
export const ADD_VENDOR = 'ADD_VENDOR';
export const FETCH_VENDORS = 'FETCH_VENDORS';
export const ADD_VENDOR_RESULT = 'ADD_VENDOR_RESULT';
export const FETCH_VENDORS_RESULT = 'FETCH_VENDORS_RESULT';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const FETCH_COUNTRYS = 'FETCH_COUNTRYS';
export const ADD_COUNTRY_RESULT = 'ADD_COUNTRY_RESULT';
export const FETCH_COUNTRYS_RESULT = 'FETCH_COUNTRYS_RESULT';
export const ADD_STATE = 'ADD_STATE';
export const FETCH_STATES = 'FETCH_STATES';
export const ADD_STATE_RESULT = 'ADD_STATE_RESULT';
export const FETCH_STATES_RESULT = 'FETCH_STATES_RESULT';
export const ADD_CITY = 'ADD_CITY';
export const FETCH_CITIES = 'FETCH_CITIES';
export const ADD_CITY_RESULT = 'ADD_CITY_RESULT';
export const FETCH_CITIES_RESULT = 'FETCH_CITIES_RESULT';
export const ADD_OPERATING_ACCOUNT = 'ADD_OPERATING_ACCOUNT';
export const FETCH_OPERATING_ACCOUNTS = 'FETCH_OPERATING_ACCOUNTS';
export const ADD_OPERATING_ACCOUNT_RESULT = 'ADD_OPERATING_ACCOUNT_RESULT';
export const FETCH_OPERATING_ACCOUNTS_RESULT =
  'FETCH_OPERATING_ACCOUNTS_RESULT';
export const ADD_INVENTORY_ACCOUNT = 'ADD_INVENTORY_ACCOUNT';
export const FETCH_INVENTORY_ACCOUNTS = 'FETCH_INVENTORY_ACCOUNTS';
export const ADD_INVENTORY_ACCOUNT_RESULT = 'ADD_INVENTORY_ACCOUNT_RESULT';
export const FETCH_INVENTORY_ACCOUNTS_RESULT =
  'FETCH_INVENTORY_ACCOUNTS_RESULT';

export const addProperty = createAction(ADD_PROPERTY);
export const addPropertyResult = createAction(ADD_PROPERTY_RESULT);
export const fetchProperties = createAction(FETCH_PROPERTIES);
export const fetchPropertiesResult = createAction(FETCH_PROPERTIES_RESULT);
export const addVendor = createAction(ADD_VENDOR);
export const addVendorResult = createAction(ADD_VENDOR_RESULT);
export const fetchVendors = createAction(FETCH_VENDORS);
export const fetchVendorsResult = createAction(FETCH_VENDORS_RESULT);
export const addCountry = createAction(ADD_COUNTRY);
export const addCountryResult = createAction(ADD_COUNTRY_RESULT);
export const fetchCountrys = createAction(FETCH_COUNTRYS);
export const fetchCountrysResult = createAction(FETCH_COUNTRYS_RESULT);
export const addState = createAction(ADD_STATE);
export const addStateResult = createAction(ADD_STATE_RESULT);
export const fetchStates = createAction(FETCH_STATES);
export const fetchStatesResult = createAction(FETCH_STATES_RESULT);
export const addCity = createAction(ADD_CITY);
export const addCityResult = createAction(ADD_CITY_RESULT);
export const fetchCities = createAction(FETCH_CITIES);
export const fetchCitiesResult = createAction(FETCH_CITIES_RESULT);
export const addOperatingAccount = createAction(ADD_OPERATING_ACCOUNT);
export const addOperatingAccountResult = createAction(
  ADD_OPERATING_ACCOUNT_RESULT
);
export const fetchOperatingAccounts = createAction(FETCH_OPERATING_ACCOUNTS);
export const fetchOperatingAccountsResult = createAction(
  FETCH_OPERATING_ACCOUNTS_RESULT
);
export const addInventoryAccount = createAction(ADD_INVENTORY_ACCOUNT);
export const addInventoryAccountResult = createAction(
  ADD_INVENTORY_ACCOUNT_RESULT
);
export const fetchInventoryAccounts = createAction(FETCH_INVENTORY_ACCOUNTS);
export const fetchInventoryAccountsResult = createAction(
  FETCH_INVENTORY_ACCOUNTS_RESULT
);
