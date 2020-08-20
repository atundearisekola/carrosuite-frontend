import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import alert from "./alert";
import staffs from "./staffs";
import auth from "./auth";
import table from "./table";
import logistics from "./logistics";
import assets from "./assets";
import property from "./property";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth,
    alert,
    staffs,
    table,
    logistics,
    assets,
    property,
  });

export default createRootReducer;
