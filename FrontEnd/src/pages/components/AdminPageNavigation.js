import React from "react";

//import PropTypes from "prop-types";
//import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AdminPageClientListContainer from "../containers/AdminPageClientListContainer";
import AdminPageEventsListContainer from "../containers/AdminPageEventsListContainer";
import AdminPageGallerysListContainer from "../containers/AdminPageGalleryListContainer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return value === index && <Box p={3}>{children}</Box>;
}
export default function AdminPageNavigation(props) {
  return (
    <>
      <AppBar position="static">
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          aria-label="simple tabs example"
        >
          <Tab value={0} label="Users" />
          <Tab value={1} label="Events" />
          <Tab value={2} label="Gallery" />
        </Tabs>
      </AppBar>
      <TabPanel value={props.value} index={0}>
        <AdminPageClientListContainer />
      </TabPanel>
      <TabPanel value={props.value} index={1}>
        <AdminPageEventsListContainer />
      </TabPanel>
      <TabPanel value={props.value} index={2}>
        <AdminPageGallerysListContainer />
      </TabPanel>
    </>
  );
}
