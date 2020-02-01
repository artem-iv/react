import React from "react";

import AdminPageView from "../components/AdminPageView";

class AdminPageContainer extends React.Component {
  state = { value: 0 };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    return (
      <AdminPageView
        value={this.state.value}
        handleChange={this.handleChange}
      />
    );
  }
}
export default AdminPageContainer;
