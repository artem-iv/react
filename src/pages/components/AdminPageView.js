import React from "react";

import AdminPageNavigation from "./AdminPageNavigation";

const AdminPageView = props => {
  return (
    <div>
      <AdminPageNavigation
        value={props.value}
        handleChange={props.handleChange}
      />
    </div>
  );
};
export default AdminPageView;
