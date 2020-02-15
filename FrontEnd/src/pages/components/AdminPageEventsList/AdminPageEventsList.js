import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    margin: 20,
    background: "#dbdb74"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const AdminPageEventsList = ({ events }) => {
  console.log(events);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="baseline"
    >
      {events.map(event => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <Typography paragraph>{event.general.personName}</Typography>
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <>
            <Typography paragraph>{event.general.name}</Typography>
            <Typography paragraph>{event.general.date}</Typography>
          </>

          <CardMedia />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {event.id}
            </Typography>
            <Typography paragraph>{event.general.maxMembers}</Typography>
          </CardContent>

          <CardContent>
            <Typography>{event.general.description}</Typography>
            <Typography>{event.general.currentMembers}</Typography>
            <Typography>{event.other.place}</Typography>
            <Typography>{event.other.ammountOfClienbts}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};
export default AdminPageEventsList;
