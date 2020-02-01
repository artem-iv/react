import React from "react";

import AdminPageEventsList from "../components/AdminPageEventsList/AdminPageEventsList";

class AdminPageEventsListContainer extends React.Component {
  state = {
    rows: [
      // { name: "Frozen yoghurt", name: 159, fat: 6.0 },
      // { name: "Frozen yoghurt", email: 159, fat: 6.0 }
    ]
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
        this.setState({ rows: data });
      });
  }

  render() {
    return <AdminPageEventsList rows={this.state.rows} />;
  }
}

export default AdminPageEventsListContainer;
