import React from "react";

import AdminPageGalleryList from "../components/AdminPageGalleryList/AdminPageGalleryList";

class AdminPageGalleryListContainer extends React.Component {
  state = {
    titleData: [
      // { name: "Frozen yoghurt", name: 159, fat: 6.0 },
      // { name: "Frozen yoghurt", email: 159, fat: 6.0 }
    ]
  };
  componentDidMount() {
    this.getPhotos();
  }
  getPhotos() {
    fetch(
      "https://pixabay.com/api?key=15107253-82115474529a99a6181882ed0&color=black"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ titleData: data.hits });
      });
  }

  render() {
    return <AdminPageGalleryList titleData={this.state.titleData} />;
  }
}

export default AdminPageGalleryListContainer;
