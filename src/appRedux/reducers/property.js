import { handleAction, combineActions } from 'redux-actions';
import {
  FETCH_PROPERTIES_RESULT,
  ADD_PROPERTY_RESULT,
  ADD_VENDOR_RESULT,
  FETCH_VENDORS_RESULT,
  ADD_COUNTRY_RESULT,
  FETCH_COUNTRYS_RESULT,
  ADD_STATE_RESULT,
  FETCH_STATES_RESULT,
  ADD_CITY_RESULT,
  FETCH_CITIES_RESULT,
  ADD_OPERATING_ACCOUNT_RESULT,
  FETCH_OPERATING_ACCOUNTS_RESULT,
  ADD_INVENTORY_ACCOUNT_RESULT,
  FETCH_INVENTORY_ACCOUNTS_RESULT,
  addPropertyResult,
  fetchPropertiesResult,
  addVendorResult,
  fetchVendorsResult,
  addCountryResult,
  fetchCountrysResult,
  addStateResult,
  fetchStatesResult,
  addCityResult,
  fetchCitiesResult,
  addOperatingAccountResult,
  fetchOperatingAccountsResult,
  addInventoryAccountResult,
  fetchInventoryAccountsResult,
} from '../actions/property';

const initialState = {
  properties: [],
  loading: false,
  error: null,
};

const propertyReducers = handleAction(
  combineActions(
    addPropertyResult,
    fetchPropertiesResult,
    addVendorResult,
    fetchVendorsResult,
    addCountryResult,
    fetchCountrysResult,
    addStateResult,
    fetchStatesResult,
    addCityResult,
    fetchCitiesResult,
    addOperatingAccountResult,
    fetchOperatingAccountsResult,
    addInventoryAccountResult,
    fetchInventoryAccountsResult
  ),

  {
    next(state, action) {
      switch (action.type) {
        case ADD_PROPERTY_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_PROPERTIES_RESULT:
          return {
            ...state,
            loading: true,
          };

          break;

        case ADD_VENDOR_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_VENDORS_RESULT:
          return {
            ...state,
            loading: true,
          };
          break;

        case ADD_COUNTRY_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_COUNTRYS_RESULT:
          return {
            ...state,
            loading: true,
          };
          break;

        case ADD_STATE_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_STATES_RESULT:
          return {
            ...state,
            loading: true,
          };
          break;

        case ADD_CITY_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_CITIES_RESULT:
          return {
            ...state,
            loading: true,
          };
          break;

        case ADD_OPERATING_ACCOUNT_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_OPERATING_ACCOUNTS_RESULT:
          return {
            ...state,
            loading: true,
          };
          break;

        case ADD_INVENTORY_ACCOUNT_RESULT:
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            loading: false,
          };

          break;

        case FETCH_INVENTORY_ACCOUNTS_RESULT:
          return {
            ...state,
            loading: true,
          };
          break;

        default:
          return state;
          break;
      }
    },
    throw(state, action) {
      switch (action.type) {
        case ADD_PROPERTY_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };
          break;

        case FETCH_PROPERTIES_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_VENDOR_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_VENDORS_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_COUNTRY_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_COUNTRYS_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_STATE_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_STATES_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_CITY_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_CITIES_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_STATE_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_STATES_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_CITY_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_CITIES_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_OPERATING_ACCOUNT_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_OPERATING_ACCOUNTS_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        case ADD_INVENTORY_ACCOUNT_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        case FETCH_INVENTORY_ACCOUNTS_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: true,
          };
          break;

        default:
          return state;
          break;
      }
    },
  },
  initialState
);

export default propertyReducers;
