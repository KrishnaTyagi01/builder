import { Button, Tooltip } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import clsx from "clsx";
import React, { useState, useContext } from "react";
import PersonalDataForm from "../forms/PersonalData";
import EditEducation from "./../forms/education/EditEducation";
import EditExp from "./../forms/experience/EditExp";
import EditExtra from "./../forms/skill/EditExtra";
import { GlobalContext } from "./../../context/reducers/provider";
import UpdateData from "./../../helpers/UpdateData";
import { UPDATE_DRAWER_STATE } from "../../constants/actionTypes";
import OpenDrawer from "./OpenDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  //
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const sections = [
  {
    label: "Personal Data",
    icon: PersonIcon,
    toggle: "personal",
  },
  {
    label: "Education",
    icon: SchoolIcon,
    toggle: "edu",
  },
  {
    label: "Work Experience",
    icon: WorkIcon,
    toggle: "exp",
  },
  {
    label: "Extra Information",
    icon: AssignmentIcon,
    toggle: "extra",
  },
];
// drawerState [string] -> change on toggle -> change state through context -> reflected In App.ts -> click back
// -> change global drawerState -> drawer closed

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [toggle, setToggle] = useState("");
  const openD = true;
  const state = useContext(GlobalContext);
  const drawerState = state["drawerState"].currentDrawer;
  console.log("Drawer State: ", state["drawerState"]);

  const leftList = () => {
    if (drawerState === "personal") {
      return (
        <OpenDrawer>
          <PersonalDataForm />
        </OpenDrawer>
      );
    } else if (drawerState === "exp") {
      return (
        <OpenDrawer>
          <EditExp />
        </OpenDrawer>
      );
    } else if (drawerState === "edu") {
      return (
        <OpenDrawer>
          <EditEducation />
        </OpenDrawer>
      );
    } else if (drawerState === "extra") {
      return (
        <OpenDrawer>
          <EditExtra />
        </OpenDrawer>
      );
    }
  };

  return (
    <div className={classes.root}>
      {drawerState === "" ? (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          style={{ backgroundColor: "black" }}
        >
          <List
            style={{
              backgroundColor: "#757de8",
              height: "100%",
              paddingTop: "10rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {sections.map((sec, index) => (
              <ListItem
                button
                key={index}
                style={{
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Tooltip title={sec.label} arrow>
                  <Button
                    onClick={() =>
                      UpdateData(
                        state["drawerStateDispatch"],
                        UPDATE_DRAWER_STATE,
                        { currentDrawer: sec.toggle }
                      )
                    }
                  >
                    <sec.icon style={{ color: "white" }} />
                  </Button>
                </Tooltip>

                {/* <ListItemText primary={text} /> */}
              </ListItem>
            ))}
          </List>
        </Drawer>
      ) : (
        leftList()
      )}
      {/* {drawerState === "" ? null : leftList()} */}
    </div>
  );
}
