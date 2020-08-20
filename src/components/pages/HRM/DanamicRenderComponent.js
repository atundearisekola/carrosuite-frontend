import React from 'react';
import HRMDashboard from "./HRMDashboard";
import AddStaff from "./AddStaff";
import People from "./People";
import ViewStaff from "./ViewStaff";
import ChangesForm from "./Changes";
import {withRouter} from 'react-router-dom';
 const DanamicRenderComponent = props => {
    let content;
    const { page, id } = props.match.params;
    switch (page) {
      case "dashboard":
        content = <HRMDashboard {...props}/>;
        break;
      case "people":
        content = <People {...props}/>;
        break;
      case "add-staff":
        content = <AddStaff {...props}/>;
        break;
      case "changes":
        content = <ChangesForm {...props}/>;
        break;
      case `staff`:
        content = <ViewStaff id={id} {...props}/>;
        break;
        default:
          content = <HRMDashboard {...props}/>;
    };
     return (
         <React.Fragment>
            {content}
         </React.Fragment>
     )
 }

 export default withRouter(DanamicRenderComponent);