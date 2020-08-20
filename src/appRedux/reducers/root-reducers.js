import { combineReducers } from 'redux';
import alert from './alert';
import staffs from './staffs';
import auth from './auth';
import table from './table';
import logistics from './logistics';
import assets from './assets';
import property from './property';

const rootReducers = combineReducers({
  auth,
  alert,
  staffs,
  table,
  logistics,
  assets,
  property,
});

export default rootReducers;
