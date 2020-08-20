import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import Alert from "./AlertError";
import { useDispatch } from "react-redux";
// import { loadUser } from "../actions/user";

const UserForm = ({ body }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (localStorage.me) {
  //     loadUser(dispatch);
  //   }
  // }, [loadUser, dispatch]);
  // const alert = useSelector(state => state.users.error);

  return (
    <div className="form-body p-1">
      <div className="form">
        {/* {alert && <Alert error={alert.message} />} */}
        {body}
      </div>
    </div>
  );
};

export default UserForm;
