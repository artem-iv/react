import React from "react";

import AdminPageClientList from "../components/AdminPageClientList/AdminPageClientList";

class AdminPageClientListContainer extends React.Component {
  state = {
    rows: [
      // { name: "Frozen yoghurt", name: 159, fat: 6.0 },
      // { name: "Frozen yoghurt", email: 159, fat: 6.0 }
    ]
  };
  componentDidMount() {
    this.getusers();
  }
  getusers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ rows: data });
      });
  }

  render() {
    return <AdminPageClientList rows={this.state.rows} />;
  }
}

export default AdminPageClientListContainer;
