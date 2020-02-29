import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      width: 300,
      display: "flex",
      flexDirection: "column",
      margin: "auto"
    }
  },
  sgc: {
    marginTop: 230,
    padding: 50
  },
  abc: {
    marginTop: 30
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.sgc}>
        <TextField id="standard-basic" label="Login" />
        <TextField
          id="standard-basic"
          label="Password"
          className={classes.abc}
        />
        <Button id="standart-basic" className={classes.abc}>
          Enter
        </Button>
      </div>
    </form>
  );
};

export default Login;
