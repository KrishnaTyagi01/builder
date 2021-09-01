import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ showCreate }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <h1 variant="h6" id="logo">
              Buildr
            </h1>
          </Link>

          {showCreate ? (
            <Link to="/resume" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#fff" }}>Create Resume</Button>
            </Link>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
